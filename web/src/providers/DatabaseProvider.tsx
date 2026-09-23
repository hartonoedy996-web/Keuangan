'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { RxDatabase } from 'rxdb';
import { initDatabase } from '@/lib/db/database';

// Type definition for our db
type MyDatabase = RxDatabase;

const DatabaseContext = createContext<MyDatabase | null>(null);

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = useState<MyDatabase | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const initDb = async () => {
      try {
        const database = await initDatabase();
        if (mounted) {
          setDb(database);
          setLoading(false);
          console.log('RxDB Database initialized successfully');
        }
      } catch (err) {
        console.error('Failed to init RxDB:', err);
        if (mounted) {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    initDb();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-cream-bg dark:bg-forest-bg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-finance-income"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-cream-bg dark:bg-forest-bg text-red-500">
        <h2>Gagal memuat database lokal</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <DatabaseContext.Provider value={db}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
}
