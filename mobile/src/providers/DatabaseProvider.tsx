import React, { createContext, useContext, useEffect, useState } from 'react';
import { initDatabase } from '../lib/db/database';
import { View, Text } from 'react-native';

const DatabaseContext = createContext<any>(null);

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    const initDb = async () => {
      try {
        const database = await initDatabase();
        if (mounted) {
          setDb(database);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err);
        }
      }
    };
    initDb();
    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Error loading database: {error.message}</Text>
      </View>
    );
  }

  if (!db) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading local database...</Text>
      </View>
    );
  }

  return (
    <DatabaseContext.Provider value={db}>
      {children}
    </DatabaseContext.Provider>
  );
}
