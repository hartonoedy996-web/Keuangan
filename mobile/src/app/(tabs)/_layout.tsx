import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#2D3748',
      tabBarInactiveTintColor: '#A0AEC0',
      tabBarStyle: {
        backgroundColor: '#FDFBF7',
        borderTopWidth: 1,
        borderTopColor: '#E2E8F0'
      },
      headerShown: false
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dasbor',
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transaksi',
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'AI Chat',
        }}
      />
    </Tabs>
  );
}
