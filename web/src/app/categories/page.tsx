'use client';
import { Plus, Download } from 'lucide-react';

export default function Categories() {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Manajemen Kategori</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Sesuaikan pengelompokan dana Anda</p>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-cream-card dark:bg-forest-card border border-gray-200 dark:border-gray-700 text-cream-textMain dark:text-forest-textMain rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Download size={16} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-finance-income text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus size={16} />
            Tambah Kategori
          </button>
        </div>
      </header>

      {/* Tabs Pemasukan vs Pengeluaran */}
      <div className="flex border-b border-gray-200 dark:border-gray-800 mb-6">
        <button className="px-6 py-3 border-b-2 border-finance-income text-finance-income font-medium text-sm">
          Pengeluaran (Expense)
        </button>
        <button className="px-6 py-3 border-b-2 border-transparent text-cream-textSecondary dark:text-gray-400 hover:text-cream-textMain dark:hover:text-white font-medium text-sm transition-colors">
          Pemasukan (Income)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mock Category Card */}
        <div className="p-4 bg-cream-card dark:bg-forest-card rounded-xl border border-gray-100 dark:border-gray-800 shadow-soft flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-finance-expense flex items-center justify-center font-bold">
              🍔
            </div>
            <div>
              <h3 className="font-semibold text-cream-textMain dark:text-forest-textMain text-sm">Food & Beverage</h3>
              <p className="text-xs text-cream-textSecondary dark:text-forest-textSecondary">4 Sub-kategori</p>
            </div>
          </div>
          <button className="text-sm text-blue-500 font-medium">Edit</button>
        </div>
        
        <div className="p-4 bg-cream-card dark:bg-forest-card rounded-xl border border-gray-100 dark:border-gray-800 shadow-soft flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center font-bold">
              🚗
            </div>
            <div>
              <h3 className="font-semibold text-cream-textMain dark:text-forest-textMain text-sm">Transportasi</h3>
              <p className="text-xs text-cream-textSecondary dark:text-forest-textSecondary">2 Sub-kategori</p>
            </div>
          </div>
          <button className="text-sm text-blue-500 font-medium">Edit</button>
        </div>
      </div>
    </div>
  );
}
