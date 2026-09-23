# AI CHAT BOT AGENT SPECIFICATIONS (Agent.md)

Dokumen ini menjelaskan perilaku agen cerdas, logika pemrosesan NLP, dan kebijakan integrasi AI pada aplikasi.

## 1. PERSONA & KARAKTERISTIK
*   **Identitas:** Asisten keuangan pintar (Inputin Bot).
*   **Nada Komunikasi:** Ramah, kasual, suportif, informatif, dan tidak bertele-tele.
*   **Tujuan:** Menerjemahkan kalimat bahasa sehari-hari ("beli kopi 25rb") menjadi baris data transaksi terstruktur.

## 2. NLP ENTITY EXTRACTION ENGINE (Logika Pemrosesan)
Agen harus mampu mengekstraksi data dari kalimat input menjadi JSON:
```json
{
  "name": "Makan Bakso",
  "amount": 15000,
  "transaction_type": "expense",
  "category": "Food & Beverage",
  "subcategory": "Food Delivery",
  "account": "BCA",
  "date": "2026-09-23"
}
```
*   **Pemecahan Kalimat (Parsing):** Jika kalimat majemuk ("Makan 25rb, bensin 50rb"), agen wajib mengembalikan *array of JSON objects*.

## 3. FLOW INTEGRASI AI
1.  **Input User:** Teks atau rekaman suara.
2.  **Edge Function (Supabase):** Memanggil API AI (OpenAI/Anthropic) dengan *system prompt* khusus.
3.  **Respons (Draft Card):** Tampilkan draf visual di chat.
4.  **Konfirmasi:** Pengguna mengklik tombol "Simpan" untuk menyimpan ke Supabase.

## 4. KEBIJAKAN KUOTA & FALLBACK
*   **Kuota:** 10 teks chat/hari (Free), unlimited (Pro). Reset otomatis 07.00 WIB.
*   **Ambiguity Handling:** Jika data tidak lengkap, agen wajib bertanya dengan sopan: "Nominalnya berapa?" atau "Akun mana yang dipakai?".
