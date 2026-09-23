'use client';

export default function CalendarReport() {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Kalender Kas</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Heatmap aktivitas keuangan bulanan</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Area */}
        <div className="lg:col-span-2 bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 p-6 min-h-[400px]">
          <h2 className="font-semibold text-lg text-cream-textMain dark:text-forest-textMain mb-4">September 2026</h2>
          
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            <div className="text-xs font-medium text-gray-400">Sen</div>
            <div className="text-xs font-medium text-gray-400">Sel</div>
            <div className="text-xs font-medium text-gray-400">Rab</div>
            <div className="text-xs font-medium text-gray-400">Kam</div>
            <div className="text-xs font-medium text-gray-400">Jum</div>
            <div className="text-xs font-medium text-gray-400">Sab</div>
            <div className="text-xs font-medium text-gray-400">Min</div>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {/* Mock Calendar Grid */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium border border-transparent hover:border-gray-300 cursor-pointer ${
                  i === 5 ? 'bg-finance-expense/20 text-finance-expense' : 
                  i === 12 ? 'bg-finance-income/20 text-finance-income' : 
                  'bg-gray-50 dark:bg-gray-800 text-cream-textMain dark:text-gray-300'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Report Summary */}
        <div className="bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="font-semibold text-lg text-cream-textMain dark:text-forest-textMain mb-4">Ringkasan Bulan Ini</h2>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
              <p className="text-xs text-red-500 font-medium mb-1">Kategori Paling Boros</p>
              <h3 className="text-lg font-bold text-cream-textMain dark:text-white">Food & Beverage</h3>
              <p className="text-sm font-medium text-finance-expense">-Rp 2.450.000</p>
            </div>
            
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
              <p className="text-xs text-green-500 font-medium mb-1">Penghematan Terbaik</p>
              <h3 className="text-lg font-bold text-cream-textMain dark:text-white">Transportasi</h3>
              <p className="text-sm font-medium text-finance-income">+Rp 600.000 dari budget</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
