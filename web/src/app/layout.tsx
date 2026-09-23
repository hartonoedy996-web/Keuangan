import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Money Manager",
  description: "Aplikasi catatan keuangan pintar dengan AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-cream-bg dark:bg-forest-bg">
          {/* Sidebar Sederhana */}
          <aside className="w-64 bg-cream-card dark:bg-forest-card border-r border-gray-100 dark:border-gray-800 hidden md:flex flex-col p-6 shadow-soft">
            <div className="text-xl font-bold text-forest-bg dark:text-cream-bg mb-10 tracking-tight">
              Money<span className="text-finance-income">Manager</span>
            </div>
            
            <nav className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Dasbor
              </Link>
              <Link href="/transactions" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Transaksi
              </Link>
              <Link href="/categories" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Kategori
              </Link>
              <Link href="/plans" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Rencana
              </Link>
              <Link href="/ai-chat" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Tanya Bot AI
              </Link>
              <Link href="/sheets" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Virtual Sheets
              </Link>
              <Link href="/calendar" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Kalender Kas
              </Link>
              <Link href="/media" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textMain dark:text-forest-textMain font-medium transition-colors">
                Media Manager
              </Link>
            </nav>
            
            <div className="mt-auto">
              <Link href="/settings" className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-cream-textSecondary dark:text-forest-textSecondary font-medium transition-colors block">
                Pengaturan
              </Link>
            </div>
          </aside>
          
          {/* Main Content Area */}
          <main className="flex-1 w-full max-w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
