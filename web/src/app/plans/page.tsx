'use client';
import { Plus } from 'lucide-react';
import CategoryProgressBar from '@/components/CategoryProgressBar';
import SavingsGoalCard from '@/components/SavingsGoalCard';

export default function Plans() {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Perencanaan Keuangan</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Budget bulanan, target tabungan, dan transaksi rutin</p>
        </div>
      </header>

      {/* Tabs Navigasi Rencana */}
      <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-full sm:w-fit mb-8">
        <button className="flex-1 sm:px-8 py-2 text-sm font-medium rounded-lg bg-white dark:bg-gray-700 shadow text-cream-textMain dark:text-forest-textMain">
          Budget
        </button>
        <button className="flex-1 sm:px-8 py-2 text-sm font-medium rounded-lg text-cream-textSecondary dark:text-gray-400 hover:text-cream-textMain dark:hover:text-white transition-colors">
          Goals
        </button>
        <button className="flex-1 sm:px-8 py-2 text-sm font-medium rounded-lg text-cream-textSecondary dark:text-gray-400 hover:text-cream-textMain dark:hover:text-white transition-colors">
          Rutin
        </button>
      </div>

      <main className="flex flex-col gap-8">
        {/* Budget Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-cream-textMain dark:text-forest-textMain">Anggaran Bulanan</h2>
            <button className="flex items-center gap-1 text-sm font-medium text-finance-income">
              <Plus size={16} /> Atur Budget
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CategoryProgressBar categoryName="Food & Beverage" limit={2500000} current={1850000} />
            <CategoryProgressBar categoryName="Transportasi" limit={1000000} current={400000} />
            <CategoryProgressBar categoryName="Belanja" limit={1500000} current={1450000} />
          </div>
        </section>

        {/* Goals Section */}
        <section className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-cream-textMain dark:text-forest-textMain">Target Tabungan</h2>
            <button className="flex items-center gap-1 text-sm font-medium text-finance-income">
              <Plus size={16} /> Buat Target
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SavingsGoalCard label="Tabungan Liburan" target={10000000} current={4500000} targetDate="2026-12-25" />
            <SavingsGoalCard label="Dana Darurat" target={50000000} current={15000000} />
          </div>
        </section>
      </main>
    </div>
  );
}
