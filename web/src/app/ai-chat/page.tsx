'use client';
import { Send, Mic, Bot } from 'lucide-react';

export default function AIChatBot() {
  return (
    <div className="flex flex-col h-screen md:h-auto md:min-h-screen p-4 md:p-8 bg-cream-bg dark:bg-forest-bg">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Tanya Bot AI</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">
            Ketik "Makan bakso 25rb" untuk catat otomatis
          </p>
        </div>
        <div className="bg-cream-card dark:bg-forest-card px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
          <span className="text-xs font-medium text-cream-textSecondary dark:text-forest-textSecondary">
            Sisa Kuota: 10/10
          </span>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden mb-4 min-h-[500px]">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-finance-income flex items-center justify-center text-white shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] text-sm text-cream-textMain dark:text-forest-textMain">
              Halo! Saya Inputin Bot. Ketik pengeluaran atau pemasukan Anda hari ini, dan saya akan buatkan laporannya secara otomatis!
            </div>
          </div>
          
          {/* Mock User Message */}
          <div className="flex items-start gap-3 self-end flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0"></div>
            <div className="bg-finance-income text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%] text-sm">
              Tadi beli kopi starbucks 54rb pake gopay
            </div>
          </div>
          
          {/* Mock Bot Draft Card Response */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-finance-income flex items-center justify-center text-white shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none p-4 max-w-[90%] sm:max-w-[300px]">
              <p className="text-sm text-cream-textMain dark:text-forest-textMain mb-3">
                Siap! Ini draf transaksinya:
              </p>
              <div className="bg-white dark:bg-gray-700 p-3 rounded-xl border border-gray-200 dark:border-gray-600 flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Nama</span>
                  <span className="font-medium text-cream-textMain dark:text-white">Kopi Starbucks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Kategori</span>
                  <span className="font-medium text-cream-textMain dark:text-white">Food & Beverage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Nominal</span>
                  <span className="font-bold text-finance-expense">Rp 54.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Akun</span>
                  <span className="font-medium text-cream-textMain dark:text-white">GoPay</span>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-finance-income text-white py-2 rounded-lg text-xs font-medium hover:opacity-90 transition">
                  Simpan Transaksi
                </button>
                <button className="flex-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-white py-2 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 transition">
                  Batal
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Input Form */}
        <div className="p-4 bg-white dark:bg-forest-card border-t border-gray-100 dark:border-gray-800">
          {/* Saran Kata */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-1 hide-scrollbar">
            <button className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-cream-textSecondary dark:text-gray-300 whitespace-nowrap border border-transparent hover:border-gray-300 dark:hover:border-gray-600">
              Makan bakso 15rb
            </button>
            <button className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-cream-textSecondary dark:text-gray-300 whitespace-nowrap border border-transparent hover:border-gray-300 dark:hover:border-gray-600">
              Bensin 50000
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-3 text-gray-400 hover:text-finance-income transition-colors bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Mic size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Tulis pesan..." 
              className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-transparent focus:border-finance-income focus:outline-none text-sm text-cream-textMain dark:text-forest-textMain"
            />
            <button className="p-3 bg-finance-income text-white rounded-xl hover:opacity-90 transition-opacity shadow-sm">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
