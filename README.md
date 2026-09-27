# Bengkel Bubut Damai — Industrial Premium

Redesign project Nuxt 3 / Vue 3 / TypeScript. Palet charcoal–ivory dengan aksen kuningan, foto pekerjaan asli, dan empat halaman responsif. Positioning utama: spesialis gear dan komponen transmisi, custom gear, shaft, keyway, bushing, serta repair komponen. Tidak memerlukan database atau API key.

## Jalankan di Windows / macOS / Linux

Gunakan Node.js 22 LTS. Ekstrak ZIP, buka terminal di folder `bubutdamai` (folder yang berisi `package.json`), lalu:

```bash
npm ci
npm run dev
```

Buka alamat localhost yang ditampilkan terminal (biasanya http://localhost:3000).

## Build

```bash
npm run generate
```

Hasil website statis ada di `.output/public`. Unggah isi folder tersebut ke hosting statis. Untuk Vercel gunakan build command `npm run generate` dan output directory `.output/public`. Domain existing tidak diubah atau dipublikasikan otomatis oleh revisi ini.

Untuk mode server Node gunakan `npm run build`, kemudian `node .output/server/index.mjs`.

## Fitur

- Beranda dengan hero fotografi, ringkasan layanan, hasil pekerjaan pilihan, dan alur konsultasi.
- Halaman layanan dengan contoh foto, tautan konsultasi sesuai layanan, dan FAQ.
- Galeri 12 foto dengan filter kategori dan detail foto memakai native dialog. Escape menutup dialog.
- Formulir kontak tervalidasi yang menyiapkan pesan WhatsApp. Pengguna tetap menekan Kirim di WhatsApp; website tidak menyimpan formulir atau mengirim pesan sendiri.
- Dua lokasi dengan peta dan tautan petunjuk arah.
- Navigasi mobile, skip link, focus indicator, dan dukungan reduced motion.
- Meta SEO, canonical domain, Open Graph, sitemap, dan data terstruktur bisnis.
- Foto WebP teroptimasi. Tiga file sumber yang berekstensi PNG ternyata HEIF sudah dikonversi agar foto yang ditampilkan kompatibel dengan browser.

## Mengubah konten

| Bagian | File |
| --- | --- |
| Warna, layout, breakpoint | `assets/css/main.css` |
| Nama / simbol merek header | `components/BrandLogo.vue` |
| Layanan | `config/services.ts` |
| Judul, kategori, deskripsi portofolio | `config/portfolio.ts` |
| Alamat & koordinat | `config/locations.ts` |
| Nomor WhatsApp tombol | `components/WhatsAppButton.vue` |
| Nomor formulir & telepon | `pages/contact.vue`, `components/Footer.vue` |
| Nomor dalam data SEO | `pages/index.vue` |
| Jam operasional | `pages/contact.vue`, `components/Footer.vue` |
| Domain canonical / OG | `composables/usePageSeo.ts` |
| Sitemap & robots | `public/sitemap.xml`, `public/robots.txt` |
| Foto hero | `public/images/hero.webp` |

Foto asli tetap disertakan sebagai arsip. Komponen website menggunakan versi `.webp`.

Nama dan deskripsi portofolio, nomor telepon, lokasi, dan jam buka berasal dari project awal. Periksa kembali kecocokan judul/material setiap foto sebelum publikasi. Tidak ditambahkan angka pelanggan, sertifikasi, testimoni, atau janji toleransi teknis yang belum dikonfirmasi.

## Validasi

Lihat `VALIDASI.md` untuk hasil pemeriksaan build dan interaksi.
