'use client';
import { Search, Filter, Calendar } from 'lucide-react';
import { cn } from '@/components/BalanceCard';

export default function Transactions() {
  return (
    <div className="p-4 md:p-8">
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
        {/* Placeholder Data */}
        <div className="p-8 text-center text-cream-textSecondary dark:text-forest-textSecondary flex flex-col items-center justify-center min-h-[300px]">
          <p>Belum ada transaksi.</p>
          <p className="text-sm mt-2 opacity-70">Data sinkronisasi dari IndexedDB akan muncul di sini.</p>
        </div>
      </div>
    </div>
  );
}
