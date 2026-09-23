import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';

// Add plugins
addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBJsonDumpPlugin);

// Shared Schema (same as Web)
export const transactionSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100 },
    amount: { type: 'number' },
    category: { type: 'string' },
    type: { type: 'string', enum: ['income', 'expense'] },
    notes: { type: 'string' },
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' }
  },
  required: ['id', 'amount', 'category', 'type', 'created_at', 'updated_at']
} as const;

let dbPromise: any = null;

export async function initDatabase() {
  if (dbPromise) return dbPromise;

  dbPromise = (async () => {
    try {
      const db = await createRxDatabase({
        name: 'smart_money_mobile_db',
        storage: getRxStorageMemory(),
        ignoreDuplicate: true,
      });

      await db.addCollections({
        transactions: {
          schema: transactionSchema
        }
      });

      return db;
    } catch (error) {
      console.error("RxDB init error:", error);
      throw error;
    }
  })();

  return dbPromise;
}
