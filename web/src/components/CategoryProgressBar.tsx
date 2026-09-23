'use client';
import { cn } from './BalanceCard';

interface CategoryProgressBarProps {
  categoryName: string;
  limit: number;
  current: number;
  className?: string;
}

export default function CategoryProgressBar({ categoryName, limit, current, className }: CategoryProgressBarProps) {
  const percentage = Math.min((current / limit) * 100, 100);
  
  // Hijau jika <50%, Oranye jika 50-80%, Merah jika >80%
  let barColor = 'bg-finance-income';
  if (percentage >= 80) {
    barColor = 'bg-finance-expense';
  } else if (percentage >= 50) {
    barColor = 'bg-finance-warning';
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className={cn("p-4 rounded-xl bg-cream-card dark:bg-forest-card shadow-soft flex flex-col gap-3", className)}>
      <div className="flex justify-between items-center text-sm">
        <span className="font-semibold text-cream-textMain dark:text-forest-textMain">{categoryName}</span>
        <span className="text-cream-textSecondary dark:text-forest-textSecondary">
          {formatCurrency(current)} / {formatCurrency(limit)}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className={cn("h-2.5 rounded-full transition-all duration-500", barColor)} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="text-xs text-right text-cream-textSecondary dark:text-forest-textSecondary">
        {percentage.toFixed(1)}% terpakai
      </div>
    </div>
  );
}
