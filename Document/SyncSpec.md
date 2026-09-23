# PANDUAN ARSITEKTUR SINKRONISASI OFFLINE-FIRST (SyncSpec.md)

Dokumen ini mendefinisikan cara data keuangan tetap aman meski tanpa internet.

## 1. STRATEGI DATA
*   **Database Lokal:** Menggunakan **SQLite (WatermelonDB)** untuk Mobile (paling cepat untuk relasi database besar) dan **IndexedDB (RxDB)** untuk Web.
*   **Keuntungan:** UI 0ms latency karena hanya berinteraksi dengan database lokal.

## 2. MEKANISME SINKRONISASI (The Sync Protocol)
*   **Queue:** Setiap perubahan transaksi (`CREATE`, `UPDATE`, `DELETE`) disimpan ke tabel `sync_queue` lokal.
*   **Trigger Sync:** Otomatis dilakukan setiap 30 detik (jika ada perubahan) atau manual oleh pengguna (tombol "Sync Now").
*   **Alur Rekonsiliasi:**
    1.  **Pull (Fetch):** Aplikasi mengambil data dari Supabase yang memiliki `updated_at > last_pulled_at`.
    2.  **Push (Sync Local):** Aplikasi mengirimkan seluruh isi `sync_queue` ke Supabase melalui Supabase Edge Functions atau API direct.
    3.  **Conflict Resolution:** Menggunakan strategi **"Last Write Wins"** (berdasarkan timestamp `updated_at` tertinggi).

## 3. PENANGANAN DATA PRIBADI
Data sensitif tidak boleh dikirim dalam bentuk plaintext sebelum autentikasi Supabase berhasil. Semua API request wajib menyertakan token JWT autentikasi Supabase untuk keamanan Row Level Security.
