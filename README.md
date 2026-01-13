# Bengkel Bubut Damai - Website Promosi

Website statis promosi untuk Bengkel Bubut Damai menggunakan Nuxt 3, Vue 3 Composition API, dan TypeScript.

## Fitur

- ✅ Nuxt 3 dengan SSG (Static Site Generation)
- ✅ TypeScript
- ✅ SEO-friendly dengan meta tags
- ✅ Responsive design (mobile-first)
- ✅ 4 halaman: Home, Services, Portfolio, Contact
- ✅ Komponen reusable: Navbar, Footer, WhatsApp Button
- ✅ Integrasi WhatsApp untuk inquiry
- ✅ Desain industrial yang clean

## Instalasi

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build untuk production
npm run build

# Generate static site
npm run generate
```

## Konfigurasi

### WhatsApp Number
Edit file `components/WhatsAppButton.vue` dan ubah prop `phone` dengan nomor WhatsApp yang sebenarnya (format: 6281234567890 tanpa +).

### Lokasi Bengkel (2 Lokasi dengan Pin Point)
Edit file `config/locations.ts` untuk mengatur lokasi bengkel:

```typescript
export const locations: Location[] = [
  {
    name: 'Bengkel Utama',
    address: 'Alamat lengkap lokasi 1',
    latitude: -6.9174639,  // Ganti dengan koordinat sebenarnya
    longitude: 107.6098164, // Ganti dengan koordinat sebenarnya
    phone: '6281517281614'
  },
  {
    name: 'Bengkel Cabang',
    address: 'Alamat lengkap lokasi 2',
    latitude: -6.9200000,  // Ganti dengan koordinat sebenarnya
    longitude: 107.6100000, // Ganti dengan koordinat sebenarnya
    phone: '6281517281614'
  }
]
```

**Cara mendapatkan koordinat:**
1. Buka Google Maps
2. Klik kanan pada lokasi yang diinginkan
3. Pilih koordinat (latitude, longitude)
4. Salin dan paste ke file `config/locations.ts`

Peta akan otomatis menampilkan pin point di lokasi yang ditentukan.

### SEO Meta Tags
Setiap halaman sudah memiliki meta tags yang dapat disesuaikan di bagian `<script setup>` masing-masing page.

## Struktur Project

```
web_bengkel/
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── Navbar.vue            # Navigation component
│   ├── Footer.vue            # Footer component
│   └── WhatsAppButton.vue    # WhatsApp CTA button
├── config/
│   └── locations.ts           # Konfigurasi lokasi bengkel (2 lokasi)
├── layouts/
│   └── default.vue           # Default layout
├── pages/
│   ├── index.vue             # Home page
│   ├── services.vue          # Services page
│   ├── portfolio.vue         # Portfolio page
│   └── contact.vue           # Contact page
├── nuxt.config.ts            # Nuxt configuration
├── package.json
└── tsconfig.json
```

## Teknologi

- Nuxt 3
- Vue 3 (Composition API)
- TypeScript
- CSS (no framework)

## Lisensi

Private project

