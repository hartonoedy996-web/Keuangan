'use client';
import { User, Settings as SettingsIcon, LogOut, Database } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Pengaturan</h1>
        <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Konfigurasi akun dan preferensi</p>
      </header>

      <div className="flex flex-col gap-6">
        {/* Profil */}
        <section className="bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
              <User size={32} />
            </div>
            <div>
              <h2 className="font-bold text-lg text-cream-textMain dark:text-forest-textMain">Hartono Edy</h2>
              <p className="text-sm text-cream-textSecondary dark:text-forest-textSecondary">Pro User</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-medium text-cream-textMain dark:text-white hover:bg-gray-200 transition-colors">
            Edit Profil
          </button>
        </section>

        {/* Sync & Database */}
        <section className="bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Database size={20} className="text-finance-income" />
            <h2 className="font-bold text-lg text-cream-textMain dark:text-forest-textMain">Sinkronisasi & Data</h2>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <p className="font-medium text-cream-textMain dark:text-forest-textMain">Status Sinkronisasi</p>
              <p className="text-sm text-cream-textSecondary dark:text-forest-textSecondary">Terakhir sinkronisasi: 2 menit yang lalu</p>
            </div>
            <button className="px-4 py-2 bg-finance-income text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
              Sync Now
            </button>
          </div>
          
          <div className="flex justify-between items-center py-3">
            <div>
              <p className="font-medium text-cream-textMain dark:text-forest-textMain">Demo Mode</p>
              <p className="text-sm text-cream-textSecondary dark:text-forest-textSecondary">Simulasi data transaksi buatan</p>
            </div>
            <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
            </div>
          </div>
        </section>

        {/* Tampilan */}
        <section className="bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <SettingsIcon size={20} className="text-gray-500" />
            <h2 className="font-bold text-lg text-cream-textMain dark:text-forest-textMain">Preferensi Aplikasi</h2>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <p className="font-medium text-cream-textMain dark:text-forest-textMain">Tema (Cream / Dark)</p>
            <select className="px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm border-none focus:ring-0 text-cream-textMain dark:text-white">
              <option>System Default</option>
              <option>Cream (Light)</option>
              <option>Forest (Dark)</option>
            </select>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <p className="font-medium text-cream-textMain dark:text-forest-textMain">Animasi Habit Plant</p>
            <div className="w-12 h-6 bg-finance-income rounded-full cursor-pointer relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
          </div>
        </section>

        <button className="flex items-center justify-center gap-2 p-4 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl transition-colors font-medium">
          <LogOut size={20} />
          Keluar (Sign Out)
        </button>
      </div>
    </div>
  );
}
