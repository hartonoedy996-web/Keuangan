import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Send } from 'lucide-react-native';

export default function ChatScreen() {
  return (
    <View className="flex-1 bg-cream-bg dark:bg-forest-bg">
      <View className="p-4 border-b border-gray-100 dark:border-gray-800 bg-cream-bg dark:bg-forest-bg mt-4">
        <Text className="text-xl font-bold text-cream-textMain dark:text-forest-textMain">Inputin Bot</Text>
        <Text className="text-xs text-cream-textSecondary mt-1">Asisten Keuangan Cerdas Anda</Text>
      </View>
      
      <ScrollView className="flex-1 p-4">
        <View className="bg-cream-card dark:bg-forest-card p-4 rounded-2xl rounded-tl-none self-start max-w-[80%] shadow-sm border border-gray-100 dark:border-gray-800">
          <Text className="text-cream-textMain dark:text-forest-textMain">
            Halo! Saya Inputin Bot. Ketik pengeluaran atau pemasukan Anda di sini. 
            Contoh: "Beli kopi 25rb pake gopay"
          </Text>
        </View>
      </ScrollView>

      <View className="p-4 bg-cream-card dark:bg-forest-card border-t border-gray-100 dark:border-gray-800 flex-row items-center gap-2">
        <TextInput 
          placeholder="Tulis transaksi..."
          placeholderTextColor="#A0AEC0"
          className="flex-1 bg-cream-bg dark:bg-forest-bg p-3 rounded-full border border-gray-200 dark:border-gray-700 text-cream-textMain dark:text-forest-textMain"
        />
        <TouchableOpacity className="bg-forest-card p-3 rounded-full">
          <Send size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
