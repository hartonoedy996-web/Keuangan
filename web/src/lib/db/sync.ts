import { RxDatabase } from 'rxdb';
import { supabase } from '../supabase/client';
import { transactionDocType } from './schema';

/**
 * Basic custom replication logic for Supabase.
 * In a production app, we would use rxdb-premium supabase integration, 
 * or build a robust GraphQL/REST replicator tracking `updated_at`.
 */
export async function syncTransactions(db: RxDatabase) {
  try {
    // 1. PUSH: Push local unsynced/newer records to Supabase
    // Simplification for MVP: Push all records to Supabase (UPSERT)
    const allLocalDocs = await db.transactions.find().exec();
    const localData = allLocalDocs.map((doc: any) => doc.toJSON());

    if (localData.length > 0) {
      // Upsert to Supabase
      const { error: pushError } = await supabase
        .from('transactions')
        .upsert(localData, { onConflict: 'id' });
        
      if (pushError) {
        console.error('Sync Push Error:', pushError);
        // We might not have the Supabase table created yet, gracefully handle.
        return { success: false, error: pushError.message };
      }
    }

    // 2. PULL: Fetch all records from Supabase and upsert locally
    const { data: remoteData, error: pullError } = await supabase
      .from('transactions')
      .select('*');

    if (pullError) {
      console.error('Sync Pull Error:', pullError);
      return { success: false, error: pullError.message };
    }

    if (remoteData && remoteData.length > 0) {
      // Upsert locally
      await db.transactions.bulkUpsert(remoteData);
    }

    return { success: true };
  } catch (err: any) {
    console.error('Sync Exception:', err);
    return { success: false, error: err.message };
  }
}
