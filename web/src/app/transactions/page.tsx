'use client';
import { Search, Filter, Calendar, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDatabase } from '@/providers/DatabaseProvider';
import { transactionDocType } from '@/lib/db/schema';

export default function Transactions() {
  const db = useDatabase();
  const [transactions, setTransactions] = useState<transactionDocType[]>([]);

  useEffect(() => {
    if (!db) return;
    
    // Subscribe to transactions collection
    const sub = db.transactions.find({
      sort: [{ transaction_date: 'desc' }]
    }).$.subscribe((docs) => {
      setTransactions(docs.map(d => d.toJSON()));
    });

    return () => sub.unsubscribe();
  }, [db]);

  const addMockTransaction = async () => {
    if (!db) return;
    try {
      await db.transactions.insert({
        id: crypto.randomUUID(),
        user_id: 'dummy-user-123',
        account_id: 'bca-123',
        category_id: 'food-123',
        name: 'Makan Nasi Goreng',
        amount: Math.floor(Math.random() * 50000) + 10000,
        transaction_type: 'expense',
        transaction_date: new Date().toISOString(),
        _deleted: false
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 md:p-8 relative min-h-screen">
      <header className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Riwayat Transaksi</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Audit catatan keuangan Anda</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Cari nama, kategori..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-cream-card dark:bg-forest-card border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-finance-income text-cream-textMain dark:text-forest-textMain"
            />
          </div>
          
          <button className="p-2 rounded-xl bg-cream-card dark:bg-forest-card border border-gray-200 dark:border-gray-700 text-cream-textMain dark:text-forest-textMain hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Filter size={18} />
          </button>
          
          <button className="p-2 rounded-xl bg-cream-card dark:bg-forest-card border border-gray-200 dark:border-gray-700 text-cream-textMain dark:text-forest-textMain hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Calendar size={18} />
          </button>
        </div>
      </header>

      {/* Tabs Jenis Transaksi */}
      <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-full sm:w-fit mb-6">
        <button className="flex-1 sm:px-8 py-2 text-sm font-medium rounded-lg bg-white dark:bg-gray-700 shadow text-cream-textMain dark:text-forest-textMain">
          Semua
        </button>
        <button className="flex-1 sm:px-8 py-2 text-sm font-medium rounded-lg text-cream-textSecondary dark:text-gray-400 hover:text-cream-textMain dark:hover:text-white transition-colors">
          Pemasukan
        </button>
        <button className="flex-1 sm:px-8 py-2 text-sm font-medium rounded-lg text-cream-textSecondary dark:text-gray-400 hover:text-cream-textMain dark:hover:text-white transition-colors">
          Pengeluaran
        </button>
      </div>

      {/* Transaction List Area */}
      <div className="bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 overflow-hidden">
        {transactions.length === 0 ? (
          <div className="p-8 text-center text-cream-textSecondary dark:text-forest-textSecondary flex flex-col items-center justify-center min-h-[300px]">
            <p>Belum ada transaksi.</p>
            <p className="text-sm mt-2 opacity-70">Klik tombol di bawah untuk menambah transaksi simulasi.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {transactions.map(tx => (
              <li key={tx.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-semibold text-cream-textMain dark:text-white">{tx.name}</span>
                  <span className="text-xs text-cream-textSecondary dark:text-forest-textSecondary">
                    {new Date(tx.transaction_date!).toLocaleString('id-ID')}
                  </span>
                </div>
                <div className={`font-bold ${tx.transaction_type === 'income' ? 'text-finance-income' : 'text-finance-expense'}`}>
                  {tx.transaction_type === 'income' ? '+' : '-'} Rp {tx.amount?.toLocaleString('id-ID')}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* FAB to add dummy transaction */}
      <button 
        onClick={addMockTransaction}
        className="fixed bottom-8 right-8 w-14 h-14 bg-finance-income text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors z-50"
        title="Tambah Transaksi (Mock)"
      >
        <Plus size={24} />
      </button>
    </div>
  );
}
