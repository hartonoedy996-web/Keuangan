'use client';
import { Upload, Image as ImageIcon } from 'lucide-react';

export default function MediaManager() {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Media & Berkas</h1>
          <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Galeri bukti struk dan transfer</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-finance-income text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          <Upload size={16} />
          Upload Baru
        </button>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Placeholder Photo */}
        <div className="aspect-square bg-cream-card dark:bg-forest-card rounded-xl border border-gray-100 dark:border-gray-800 shadow-soft flex flex-col items-center justify-center text-gray-400 group cursor-pointer hover:border-finance-income transition-colors overflow-hidden relative">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <ImageIcon size={32} className="z-10 text-gray-400 dark:text-gray-500" />
        </div>
        <div className="aspect-square bg-cream-card dark:bg-forest-card rounded-xl border border-gray-100 dark:border-gray-800 shadow-soft flex flex-col items-center justify-center text-gray-400 group cursor-pointer hover:border-finance-income transition-colors overflow-hidden relative">
          <ImageIcon size={32} className="z-10 text-gray-400 dark:text-gray-500" />
          <p className="z-10 text-xs mt-2 text-gray-500">Struk.jpg</p>
        </div>
      </div>
    </div>
  );
}
