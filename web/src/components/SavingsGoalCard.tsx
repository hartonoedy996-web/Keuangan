'use client';
import { cn } from './BalanceCard';
import { Target } from 'lucide-react';

interface SavingsGoalCardProps {
  label: string;
  target: number;
  current: number;
  targetDate?: string;
  className?: string;
}

export default function SavingsGoalCard({ label, target, current, targetDate, className }: SavingsGoalCardProps) {
  const percentage = Math.min((current / target) * 100, 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className={cn("p-5 rounded-2xl bg-cream-card dark:bg-forest-card shadow-soft flex flex-col gap-4 border border-gray-100 dark:border-gray-800", className)}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30 text-finance-income">
            <Target size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-cream-textMain dark:text-forest-textMain">{label}</h3>
            {targetDate && (
              <p className="text-xs text-cream-textSecondary dark:text-forest-textSecondary mt-1">
                Target: {new Date(targetDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <span className="text-xl font-bold text-cream-textMain dark:text-forest-textMain">
            {formatCurrency(current)}
          </span>
          <span className="text-sm font-medium text-cream-textSecondary dark:text-forest-textSecondary">
            {percentage.toFixed(0)}%
          </span>
        </div>
        
        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
          <div 
            className="h-3 rounded-full bg-finance-income transition-all duration-700 ease-out" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <p className="text-xs text-cream-textSecondary dark:text-forest-textSecondary mt-1">
          Sisa {formatCurrency(target - current)} lagi menuju target
        </p>
      </div>
    </div>
  );
}
