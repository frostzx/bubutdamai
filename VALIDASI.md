# Hasil validasi

- `npm ci`: berhasil dengan lockfile project.
- `npm run generate`: berhasil; 4 halaman diprerender.
- Viewport 1440 × 1000 dan 390 × 844: tidak ada horizontal overflow pada seluruh halaman pada pengujian sebelumnya.
- Seluruh foto yang digunakan pada halaman berhasil dimuat, termasuk hasil konversi HEIF.
- Kategori portofolio mengikuti data gear, custom gear, dan komponen transmisi pada konfigurasi terbaru.
- Detail foto terbuka; tombol Escape menutup native dialog.
- Menu mobile membuka navigasi, berpindah ke halaman layanan, dan menutup setelah navigasi.
- Formulir menghasilkan URL WhatsApp dengan nama, layanan, detail, newline, serta karakter & ter-encode dengan benar. `window.open` ditangkap saat uji: tidak ada pesan dikirim.
- Positioning tampil konsisten di hero, halaman layanan, CTA, footer, metadata SEO, kategori portofolio, serta pilihan layanan formulir: gear dan komponen transmisi sebagai fokus utama, termasuk custom gear dan repair komponen.

## Batas pemeriksaan

Peta Google eksternal diblokir dalam pengujian lokal. Nomor WhatsApp, kepemilikan nomor, jam operasional, lokasi fisik, dan kecocokan keterangan foto tidak diverifikasi secara eksternal; mengikuti data project awal. Belum dipublikasikan ke domain produksi.
