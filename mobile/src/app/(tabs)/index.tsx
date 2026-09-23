import { View, Text, ScrollView } from 'react-native';
import BalanceCard from '../../components/BalanceCard';

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-cream-bg dark:bg-forest-bg p-4">
      <View className="mb-6 mt-4">
        <Text className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Dasbor Keuangan</Text>
        <Text className="text-sm text-cream-textSecondary dark:text-forest-textSecondary mt-1">Ringkasan kondisi arus kas Anda</Text>
      </View>
      
      <View className="mb-4">
        <BalanceCard title="Saldo Aktif" balance={12500000} type="neutral" />
      </View>

      <View className="flex-row gap-4 mb-6">
        <View className="flex-1">
          <BalanceCard title="Pemasukan" balance={15000000} type="income" />
        </View>
        <View className="flex-1">
          <BalanceCard title="Pengeluaran" balance={2500000} type="expense" />
        </View>
      </View>
    </ScrollView>
  );
}
