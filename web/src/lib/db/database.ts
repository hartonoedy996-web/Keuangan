import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { transactionSchemaLiteral, accountSchemaLiteral, categorySchemaLiteral } from './schema';

// Enable debugging in dev mode
if (process.env.NODE_ENV === 'development') {
  import('rxdb/plugins/dev-mode').then((module) => {
    addRxPlugin(module.RxDBDevModePlugin);
  });
}

// Add state plugin for React hooks
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
addRxPlugin(RxDBUpdatePlugin);

let dbPromise: Promise<any> | null = null;

export function initDatabase() {
  if (dbPromise) return dbPromise;

  dbPromise = (async () => {
    const db = await createRxDatabase({
      name: 'smart_money_db',
      storage: getRxStorageDexie(),
      ignoreDuplicate: true // Important for React Strict Mode
    });

    // Create collections
    await db.addCollections({
      transactions: {
        schema: transactionSchemaLiteral
      },
      accounts: {
        schema: accountSchemaLiteral
      },
      categories: {
        schema: categorySchemaLiteral
      }
    });

    return db;
  })();

  return dbPromise;
}
