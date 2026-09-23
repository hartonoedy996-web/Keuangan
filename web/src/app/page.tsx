import BalanceCard from '@/components/BalanceCard';
import CategoryProgressBar from '@/components/CategoryProgressBar';
import SavingsGoalCard from '@/components/SavingsGoalCard';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-cream-bg dark:bg-forest-bg p-4 md:p-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Dasbor Keuangan</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Ringkasan kondisi arus kas Anda</p>
        </div>
        <div className="flex gap-2">
          {/* We will add Sync / Settings buttons here later */}
          <button className="bg-forest-card text-white px-4 py-2 rounded-lg text-sm font-medium">
            Sync Now
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Kolom Kiri: Saldo & Habit Plant */}
        <div className="md:col-span-8 flex flex-col gap-6">
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <BalanceCard title="Saldo Aktif" balance={12500000} type="neutral" />
            <BalanceCard title="Pemasukan" balance={15000000} type="income" />
            <BalanceCard title="Pengeluaran" balance={2500000} type="expense" />
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
