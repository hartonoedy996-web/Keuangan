import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native';
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
    <View className={cn("p-6 rounded-2xl bg-cream-card dark:bg-forest-card shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-2", className)}>
      <View className="flex-row justify-between items-center">
        <Text className="text-sm font-medium text-cream-textSecondary dark:text-forest-textSecondary">
          {title}
        </Text>
        <TouchableOpacity onPress={() => setIsMasked(!isMasked)}>
          {isMasked ? <EyeOff size={16} color="#718096" /> : <Eye size={16} color="#718096" />}
        </TouchableOpacity>
      </View>
      <Text className={cn("text-2xl font-bold", typeStyles[type])}>
        {displayBalance}
      </Text>
    </View>
  );
}
