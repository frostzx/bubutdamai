// Konfigurasi Lokasi Bengkel
// Edit koordinat dan alamat sesuai lokasi sebenarnya

export interface Location {
  name: string
  address: string
  latitude: number
  longitude: number
  phone?: string
}

export const locations: Location[] = [
  {
    name: 'Bengkel Utama',
    address: 'Kapuk Raya GG las no 48 RT 005/RW 05 Jakarta Barat',
    latitude: -6.1385729,
    longitude: 106.7609745,
    phone: '6281517281614'
  },
  {
    name: 'Bengkel Cabang',
    address: 'Jl. Pangeran Jayakarta No. 2B Belakang Gedung WORCAS GROUP Akses masuk melalui samping Gedung WORCAS GROUP (area pinggir kali) RT 001 / RW 01',
    latitude: -6.140384,
    longitude: 106.8211023,
    phone: '6281517281614'
  }
]

// Fungsi helper untuk generate Google Maps embed URL dengan pin point
// Menggunakan format yang menampilkan pin point di koordinat yang ditentukan
export function getGoogleMapsEmbedUrl(location: Location, zoom: number = 15): string {
  // Format embed dengan koordinat - akan otomatis menampilkan pin point
  // Alternatif: bisa juga menggunakan alamat jika koordinat tidak tersedia
  const query = encodeURIComponent(`${location.latitude},${location.longitude}`)
  return `https://maps.google.com/maps?q=${query}&z=${zoom}&hl=id&output=embed`
}

// Fungsi untuk generate Google Maps link dengan pin point
export function getGoogleMapsLink(location: Location): string {
  return `https://www.google.com/maps?q=${location.latitude},${location.longitude}&ll=${location.latitude},${location.longitude}&z=15`
}

