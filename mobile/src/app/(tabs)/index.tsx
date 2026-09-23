import { View, Text, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-cream-bg dark:bg-forest-bg p-4">
      <View className="mb-6">
        <Text className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Dasbor Keuangan</Text>
        <Text className="text-sm text-cream-textSecondary dark:text-forest-textSecondary mt-1">Ringkasan kondisi arus kas Anda</Text>
      </View>
      
      <View className="bg-cream-card dark:bg-forest-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-4">
        <Text className="text-cream-textSecondary dark:text-forest-textSecondary mb-2">Saldo Aktif</Text>
        <Text className="text-2xl font-bold text-finance-neutral">Rp 12.500.000</Text>
      </View>

      <View className="flex-row gap-4 mb-6">
        <View className="flex-1 bg-cream-card dark:bg-forest-card p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
          <Text className="text-xs text-cream-textSecondary dark:text-forest-textSecondary mb-1">Pemasukan</Text>
          <Text className="text-lg font-bold text-finance-income">Rp 15.000.000</Text>
        </View>
        <View className="flex-1 bg-cream-card dark:bg-forest-card p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
          <Text className="text-xs text-cream-textSecondary dark:text-forest-textSecondary mb-1">Pengeluaran</Text>
          <Text className="text-lg font-bold text-finance-expense">Rp 2.500.000</Text>
        </View>
      </View>

    </ScrollView>
  );
}
