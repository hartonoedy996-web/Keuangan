'use client';
import { useEffect, useState } from 'react';
import { useDatabase } from '@/providers/DatabaseProvider';
import { transactionDocType } from '@/lib/db/schema';
import { syncTransactions } from '@/lib/db/sync';
import BalanceCard from '@/components/BalanceCard';
import CategoryProgressBar from '@/components/CategoryProgressBar';
import SavingsGoalCard from '@/components/SavingsGoalCard';

export default function Dashboard() {
  const db = useDatabase();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    if (!db) return;
    
    const sub = db.transactions.find().$.subscribe((docs) => {
      let inc = 0;
      let exp = 0;
      docs.forEach(doc => {
        const tx = doc.toJSON() as transactionDocType;
        if (tx.transaction_type === 'income') inc += (tx.amount || 0);
        else if (tx.transaction_type === 'expense') exp += (tx.amount || 0);
      });
      setTotalIncome(inc);
      setTotalExpense(exp);
    });

    return () => sub.unsubscribe();
  }, [db]);

  const activeBalance = totalIncome - totalExpense;

  const handleSync = async () => {
    if (!db) return;
    setIsSyncing(true);
    const result = await syncTransactions(db);
    setIsSyncing(false);
    
    if (result.success) {
      alert('Sync Berhasil!');
    } else {
      alert('Sync Gagal: ' + result.error + '\n(Tabel Supabase belum dibuat di backend)');
    }
  };

  return (
    <div className="min-h-screen bg-cream-bg dark:bg-forest-bg p-4 md:p-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Dasbor Keuangan</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Ringkasan kondisi arus kas Anda</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className={`bg-forest-card text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isSyncing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
          >
            {isSyncing ? 'Syncing...' : 'Sync Now'}
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Kolom Kiri: Saldo & Habit Plant */}
        <div className="md:col-span-8 flex flex-col gap-6">
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <BalanceCard title="Saldo Aktif" balance={activeBalance} type="neutral" />
            <BalanceCard title="Pemasukan" balance={totalIncome} type="income" />
            <BalanceCard title="Pengeluaran" balance={totalExpense} type="expense" />
          </section>

          {/* Placeholder untuk Donut Chart & Daftar Transaksi Terbaru */}
          <section className="bg-cream-card dark:bg-forest-card p-6 rounded-2xl shadow-soft min-h-[300px] flex items-center justify-center border border-gray-100 dark:border-gray-800">
            <p className="text-cream-textSecondary dark:text-forest-textSecondary">[ Donut Chart Area ]</p>
          </section>
        </div>

        {/* Kolom Kanan: Rencana & Tabungan */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-cream-textMain dark:text-forest-textMain">Anggaran Tersisa</h2>
            <CategoryProgressBar categoryName="Food & Beverage" limit={2500000} current={1850000} />
            <CategoryProgressBar categoryName="Transportasi" limit={1000000} current={400000} />
          </section>

          <section className="flex flex-col gap-4 mt-4">
            <h2 className="text-lg font-bold text-cream-textMain dark:text-forest-textMain">Target Tabungan</h2>
            <SavingsGoalCard label="Tabungan Liburan" target={10000000} current={4500000} targetDate="2026-12-25" />
          </section>
        </div>
      </main>
    </div>
  );
}
