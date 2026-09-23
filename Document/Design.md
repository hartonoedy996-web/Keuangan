# DESIGN SYSTEM & UI ARCHITECTURE (Design.md)

Dokumen ini adalah standar panduan desain visual (UI/UX) aplikasi keuangan pintar, memastikan konsistensi antara versi mobile dan web.

## 1. STRATEGI TEMA WARNA
Warna harus memperkuat identitas brand (hijau sebagai pertumbuhan/finansial) dan memastikan aksesibilitas.

### A. TEMA CREAM (Light Mode - Default)
*   **Warna Latar Utama:** `#FDFBF7` (Memberikan kesan hangat, klasik, dan tidak tajam di mata).
*   **Warna Latar Kontainer (Kartu):** `#FFFFFF` (Putih bersih).
*   **Bayangan Kartu (Shadows):** `0 4px 10px rgba(243, 236, 224, 0.3)` (Sangat halus, memberikan kesan kedalaman/floating).
*   **Warna Teks Utama:** `#2C2924` (Charcoal lembut).
*   **Warna Teks Sekunder:** `#8B8377` (Warm Gray, untuk informasi pendukung/metadata).

### B. TEMA DARK MODE (Deep Forest - Berkelas)
*   **Warna Latar Utama:** `#072A24` (Warna identitas aplikasi, tenang dan premium).
*   **Warna Latar Kontainer:** `#0B3C33` (Warm Dark Teal, kontras dengan background).
*   **Warna Teks Utama:** `#FFFFFF` (Putih murni).
*   **Warna Teks Sekunder:** `#729B93` (Pale Sea Green, keterbacaan tinggi).

### C. PALET WARNA ASET KEUANGAN
*   **Pemasukan (Income):** `#10B981` (Emerald Green).
*   **Pengeluaran (Expense):** `#EF4444` (Coral Red, sedikit lebih lembut dari merah murni).
*   **Peringatan Budget (Warning):** `#F59E0B` (Amber/Orange).

---

## 2. KOMPONEN UI MODULAR (Design Pattern)
Setiap komponen di bawah harus dibuat modular agar bisa digunakan ulang baik di aplikasi mobile maupun website.

1.  **BalanceCard (Component):**
    *   Menggunakan state internal untuk `isMasked`.
    *   Jika `isMasked == true`, tampilkan `Rp ***`.
2.  **CategoryProgressBar (Component):**
    *   Props: `limit` (total budget), `current` (pengeluaran sekarang).
    *   Warna: Hijau jika `<50%`, Oranye jika `50-80%`, Merah jika `>80%`.
3.  **SavingsGoalCard (Component):**
    *   Props: `target`, `current`, `label`, `date`.
    *   Visual: Bar status progress dengan label angka nominal terkumpul dan persentase otomatis.
4.  **InteractiveTableGrid (Component):**
    *   Antarmuka tabel responsif.
    *   Fungsi klik-ganda untuk memicu mode *inline-edit*.
5.  **ChartContainer (Wrapper Component):**
    *   Pembungkus untuk seluruh elemen grafik (Recharts untuk web, SVG untuk mobile) agar memiliki padding yang konsisten.

---

## 3. TIPOGRAFI
*   **Font:** Gunakan font *San Serif* modern (seperti Inter atau System Default) untuk kejelasan data angka.
*   **Hirarki:**
    *   Judul Utama: 20px / Bold.
    *   Data Nominal: 18px / Bold (monospaced untuk konsistensi angka).
    *   Metadata/Label: 12px / Medium.
