# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## APLIKASI CATATAN KEUANGAN PINTAR (INPUTIN REPLICA)

---

## 1. PENDAHULUAN & TUJUAN UTAMA
Aplikasi ini dikembangkan sebagai alat pengelolaan keuangan pribadi pintar (Smart Money Manager) berbasis multiplatform (Mobile dan Web Dashboard) dengan strategi sinkronisasi data **Offline-First**. 

Tujuan utama dari aplikasi ini adalah untuk memberikan kenyamanan mencatat keuangan yang sangat cepat (tanpa delay internet), fleksibilitas multi-rekening/multi-dompet, analitik yang mendalam, serta asisten AI interaktif untuk memudahkan pencatatan berbasis percakapan sehari-hari.

---

## 2. ARSITEKTUR LAYAR & ALUR PENGGUNA (SCREEN BY SCREEN SPECIFICATION)

### layar 1: Dashboard (Dasbor Analitis Utama)
*   **Fungsi:** Menyajikan ringkasan visual instan mengenai kondisi arus kas bersih, sisa anggaran, dan tren pengeluaran pengguna.
*   **Elemen Visual & Interaktif:**
    *   **Kartu Saldo Dinamis:** Menampilkan "Saldo Aktif", "Pemasukan", dan "Pengeluaran" bulanan.
    *   **Keamanan Privasi (Sensor):** Tombol ikon "Mata Terbuka/Tertutup" untuk menyembunyikan nominal saldo (`Rp ***`) secara global di dasbor.
    *   **Grafik Lingkaran (Donut Chart):** Memperlihatkan rasio persentase Pemasukan vs Pengeluaran dengan nilai Aliran Kas Bersih (Net Cash Flow) yang ditampilkan persis di tengah donut chart.
    *   **Tanaman Habit (Habit Plant):** Karakter tanaman visual interaktif yang tumbuh bertahap (tunas, daun kecil, pohon berbunga) jika pengguna konsisten mencatatkan keuangan setiap harinya.
    *   **Daftar Transaksi Terbaru:** List 5 transaksi terakhir dengan pintasan cepat menuju halaman filter detail.

### Layar 2: Detail Transaksi (Transaction History)
*   **Fungsi:** Lembar audit riwayat seluruh catatan keuangan yang masuk, keluar, atau ditransfer.
*   **Elemen Visual & Interaktif:**
    *   **Bilah Pencarian (Search Bar):** Input teks real-time yang memfilter transaksi berdasarkan nama, nama kategori, sub-kategori, atau nama akun.
    *   **Penyaring Tanggal (Date Filter Modal):** Filter cepat (7 Hari Terakhir, 30 Hari Terakhir, Bulan ini, Tahun Berjalan, Pilih Rentang Tanggal Kustom, Pilih Bulan, Pilih Tahun).
    *   **Filter Multi-Akun (Account Filter Modal):** Multi-select daftar akun/rekening (Cash, BCA, GoPay, Tabungan, dll) untuk melihat transaksi yang melibatkan akun bersangkutan saja.
    *   **Jenis Transaksi Filter:** Tab geser untuk menyaring data "Semua", "Pemasukan (Income)", atau "Pengeluaran (Expense)".
    *   **Edit Massal (Batch Editor):** Tombol "Edit" untuk memilih lebih dari satu baris transaksi sekaligus lalu menghapusnya atau memindahkan kategorinya dalam satu ketukan.

### Layar 3: Manajemen Kategori (Categories Screen)
*   **Fungsi:** Halaman kustomisasi pengelompokan jenis dana keluar dan masuk.
*   **Elemen Visual & Interaktif:**
    *   **Tab Pemisah:** Tab "Income" dan "Expense".
    *   **Tombol "+ Add Row" / "+ Tambah Kategori":** Membuka form popup untuk menambahkan kategori kustom baru lengkap dengan pemilihan palet warna dan ikon yang representatif.
    *   **Ekspor Data Kategori:** Tombol "Export CSV" untuk mengunduh semua transaksi per kategori yang terpilih ke format spreadsheet.

### Layar 4: Sub-Modul Rencana (Plans Screen)
Modul perencanaan keuangan terbagi menjadi tiga tab navigasi atas yang krusial:
1.  **Budget (Anggaran Bulanan):**
    *   Membuat alokasi batas maksimal belanja per kategori (Contoh: "Food & Beverage: Rp 2.500.000").
    *   Dilengkapi progress bar konsumsi anggaran (Hijau untuk aman, Oranye untuk siaga >80%, dan Merah untuk jebol >100%).
2.  **Goals (Target Tabungan / Goal Tracker):**
    *   Melacak tabungan rencana jangka panjang (Contoh: "Tabungan Haji: Rp 5.500.000 / Rp 50.000.000").
    *   Menghitung persentase pencapaian, sisa nominal yang perlu ditabung, target tanggal pencapaian, serta tombol "+ Add funds" untuk menyetor uang saku ke tabungan impian tersebut.
3.  **Rutin (Recurring auto-posted):**
    *   Mengatur pendaftaran transaksi yang berulang otomatis sesuai siklus tanggal (Gaji, sewa kos, langganan Netflix, zakat, cicilan).
    *   Menampilkan sisa hari menuju eksekusi dan tombol "Jalankan" (eksekusi manual instan) atau "Jeda" (pause transaksi otomatis).

### Layar 5: Asisten AI & Chat Bot (Conversational Logging)
*   **Fungsi:** Menyediakan pencatatan keuangan otomatis tercepat lewat bahasa manusia (Chat teks atau Rekaman Suara).
*   **Elemen Visual & Interaktif:**
    *   **Saran Kata Instan:** Chip saran cepat di atas kolom input ("Makan bakso 15rb", "Bensin 50000", "Gaji bulanan 5.5jt").
    *   **Kartu Draf Transaksi Cerdas:** Chat Bot memproses kata ("makan starbucks 54rb pake gopay"), memetakan entitas data, lalu memunculkan bubble chat berisi draf transaksi interaktif (Nama, Nominal, Kategori, Sub-kategori, Akun). Pengguna cukup menekan tombol "Simpan" untuk mendaftarkannya secara permanen.

### Layar 6: Media Manager & Berkas Lampiran
*   **Fungsi:** Galeri cloud penyimpanan struk belanja dan nota bukti transfer.
*   **Elemen Visual & Interaktif:**
    *   Galeri foto bukti belanja yang secara otomatis terhubung ke baris transaksi terkait.
    *   Modul unggah baru ("Upload Baru") dengan pendeteksi otomatisasi AI (Vision OCR) untuk mem-parsing draf transaksi dari foto struk belanja secara langsung.

### Layar 7: Virtual Sheets (Spreadsheet Grid)
*   **Fungsi:** Menyajikan data kas dalam bentuk tabular selayaknya Excel agar mudah diaudit dalam jumlah besar.
*   **Elemen Visual & Interaktif:**
    *   **Editable Cell Grid:** Pengguna dapat mengeklik ganda sel baris tabel untuk mengedit data transaksi secara langsung.
    *   Filter kolom, tambah baris manual instan, dan tombol "Export CSV" untuk unduhan massal.

### Layar 8: Kalender Kas & Laporan Detail (Calendar Report)
*   **Fungsi:** Visualisasi kalender bulanan interaktif.
*   **Elemen Visual & Interaktif:**
    *   **Calendar Heatmap:** Tanggal-tanggal pada kalender memiliki warna penanda (Hijau untuk surplus dana masuk harian, Oranye/Merah untuk pengeluaran dominan hari tersebut).
    *   **Ringkasan Laporan:** List rekapitulasi kategori dan nama transaksi paling boros serta penghematan paling signifikan.

### Layar 9: Pengaturan Tingkat Lanjut (Settings)
*   Mengatur profil akun (Login email, tombol "Sync Now").
*   Aktivasi "Demo Mode" untuk menyimulasikan data transaksi pengujian yang aman.
*   Fitur Habit Plant toggle, preferensi tema (Cream, Dark Mode, Light Mode), bahasa utama (Indonesia/Inggris), notifikasi pengingat, dan hapus akun permanen.

---

## 3. ATURAN BISNIS & BATASAN FITUR
1.  **Akun Free vs Pro:**
    *   **Free:** Akses semua dasbor dasar, pencatatan manual, batasan kuota bot AI (10 chat teks per hari), tanpa backup Media Manager.
    *   **Pro:** Penyimpanan backup cloud real-time, kuota AI bot tak terbatas, Media Manager Cloud Storage hingga 2 GB.
2.  **Mekanisme Sync Reset:** Reset harian kuota chat bot AI dilakukan secara otomatis setiap pukul 07:00 WIB.
