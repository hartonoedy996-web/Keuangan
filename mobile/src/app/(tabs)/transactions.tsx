import { View, Text, ScrollView } from 'react-native';
import TransactionItem from '../../components/TransactionItem';

export default function TransactionsScreen() {
  return (
    <View className="flex-1 bg-cream-bg dark:bg-forest-bg">
      <View className="p-4 border-b border-gray-100 dark:border-gray-800 bg-cream-bg dark:bg-forest-bg mt-4">
        <Text className="text-xl font-bold text-cream-textMain dark:text-forest-textMain">Riwayat Transaksi</Text>
      </View>
      <ScrollView className="flex-1">
        {/* Placeholder mock data */}
        <TransactionItem name="Gaji Bulanan" category="Salary" amount={15000000} type="income" date="23 Sep 2026" />
        <TransactionItem name="Makan Siang" category="Food & Beverage" amount={45000} type="expense" date="23 Sep 2026" />
        <TransactionItem name="Kopi Bawah Tangga" category="Food & Beverage" amount={25000} type="expense" date="22 Sep 2026" />
        <TransactionItem name="Bensin Pertamax" category="Transportasi" amount={150000} type="expense" date="21 Sep 2026" />
        <TransactionItem name="Belanja Bulanan" category="Groceries" amount={850000} type="expense" date="20 Sep 2026" />
      </ScrollView>
    </View>
  );
}
