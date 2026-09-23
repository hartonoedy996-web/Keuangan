'use client';
import { Table as TableIcon } from 'lucide-react';

export default function VirtualSheets() {
  return (
    <div className="p-4 md:p-8 flex flex-col h-screen md:h-auto min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-cream-textMain dark:text-forest-textMain">Virtual Sheets</h1>
        <p className="text-cream-textSecondary dark:text-forest-textSecondary text-sm mt-1">Audit data gaya Spreadsheet</p>
      </header>

      <div className="flex-1 bg-cream-card dark:bg-forest-card rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Transaksi</th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Akun</th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Nominal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {/* Mock Row */}
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-text">
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">23 Sep 2026</td>
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">Gaji Bulanan</td>
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">Salary</td>
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">BCA</td>
              <td className="p-4 text-sm font-medium text-finance-income text-right">Rp 15.000.000</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-text">
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">23 Sep 2026</td>
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">Makan Siang</td>
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">Food & Beverage</td>
              <td className="p-4 text-sm text-cream-textMain dark:text-gray-300">GoPay</td>
              <td className="p-4 text-sm font-medium text-finance-expense text-right">-Rp 45.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
