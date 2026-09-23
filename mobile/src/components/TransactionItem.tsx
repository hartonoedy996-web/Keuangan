import { View, Text } from 'react-native';

interface TransactionItemProps {
  name: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
}

export default function TransactionItem({ name, category, amount, type, date }: TransactionItemProps) {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val);
  };

  return (
    <View className="flex-row items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
      <View>
        <Text className="font-medium text-cream-textMain dark:text-forest-textMain text-base">{name}</Text>
        <Text className="text-xs text-cream-textSecondary dark:text-forest-textSecondary mt-1">{category} • {date}</Text>
      </View>
      <View>
        <Text className={`font-bold ${type === 'income' ? 'text-finance-income' : 'text-finance-expense'}`}>
          {type === 'income' ? '+' : '-'}{formatCurrency(amount)}
        </Text>
      </View>
    </View>
  );
}
