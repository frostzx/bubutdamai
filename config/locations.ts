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
    address: 'Jl. Raya Industri No. 123, Kecamatan Industri, Kota, Jawa Barat',
    latitude: -6.1385729,
    longitude: 106.7609745,
    phone: '6281234567890'
  },
  {
    name: 'Bengkel Cabang',
    address: 'Jl. Perindustrian No. 456, Kecamatan Sentra, Kota, Jawa Barat',
    latitude: -6.140384,
    longitude: 106.8211023,
    phone: '6281234567890'
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

