'use client';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BalanceCardProps {
  title: string;
  balance: number;
  type?: 'neutral' | 'income' | 'expense';
  className?: string;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function BalanceCard({ title, balance, type = 'neutral', className }: BalanceCardProps) {
  const [isMasked, setIsMasked] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  const displayBalance = isMasked ? 'Rp ***' : formatCurrency(balance);

  const typeStyles = {
    neutral: 'text-cream-textMain dark:text-forest-textMain',
    income: 'text-finance-income',
    expense: 'text-finance-expense',
  };

  return (
    <div className={cn("p-6 rounded-2xl bg-cream-card dark:bg-forest-card shadow-soft flex flex-col gap-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-cream-textSecondary dark:text-forest-textSecondary">
          {title}
        </span>
        <button onClick={() => setIsMasked(!isMasked)} className="text-cream-textSecondary dark:text-forest-textSecondary hover:opacity-80 transition-opacity">
          {isMasked ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      <h2 className={cn("text-2xl font-bold font-mono", typeStyles[type])}>
        {displayBalance}
      </h2>
    </div>
  );
}
