// Konfigurasi Portfolio - Gambar dari assets/images
// Edit nama dan deskripsi sesuai dengan gambar yang sebenarnya

export interface PortfolioItem {
  title: string
  description: string
  category: string
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Shaft Stainless Steel',
    description: 'Pengerjaan shaft dengan material stainless steel, hasil bubut presisi dengan finishing halus untuk aplikasi industri.',
    category: 'Bubut Stainless',
    image: '4c624eb1a015933d4480185ed92c9d1a.webp'
  },
  {
    title: 'Custom Gear',
    description: 'Pengerjaan gear custom dengan dimensi sesuai contoh atau spesifikasi. Dikerjakan teliti untuk kebutuhan transmisi.',
    category: 'Custom Gear',
    image: '9828a56927f5963c29937088f9df3ea1.webp'
  },
  {
    title: 'Flange Besi Cor',
    description: 'Pembuatan flange dengan material besi cor, diameter besar dengan lubang baut yang presisi untuk aplikasi industri.',
    category: 'Bubut Besi',
    image: '98572a031ebdb0962648d1ff672db1e0.webp'
  },
  {
    title: 'Bushing Stainless',
    description: 'Bushing stainless steel dengan toleransi ketat, hasil bubut halus untuk aplikasi yang memerlukan presisi tinggi.',
    category: 'Bubut Stainless',
    image: 'a3d8c4f95af4249c08fd1dcae5c478a8.webp'
  },
  {
    title: 'Sleeve Besi',
    description: 'Sleeve dengan material besi, pengerjaan dengan mesin bubut menghasilkan dimensi yang akurat dan permukaan halus.',
    category: 'Bubut Besi',
    image: 'FB_IMG_1760689920031.webp'
  },
  {
    title: 'Threaded Rod Stainless',
    description: 'Threaded rod stainless steel dengan threading presisi, cocok untuk aplikasi yang memerlukan ketahanan korosi.',
    category: 'Bubut Stainless',
    image: 'FB_IMG_1760689941061.webp'
  },
  {
    title: 'Shaft dengan Groove',
    description: 'Pengerjaan shaft dengan groove dan detail khusus untuk kebutuhan komponen transmisi.',
    category: 'Komponen Transmisi',
    image: 'FB_IMG_1760689945909.webp'
  },
  {
    title: 'Repair Komponen Gear',
    description: 'Perbaikan komponen gear mesin yang rusak, hasil repair seperti baru dengan dimensi yang telah direstorasi.',
    category: 'Gear & Transmisi',
    image: 'FB_IMG_1761235287664.webp'
  },
  {
    title: 'Bubut Threading Besi',
    description: 'Pengerjaan threading pada material besi dengan presisi tinggi, hasil yang rapi dan sesuai standar.',
    category: 'Bubut Besi',
    image: 'IMG-20251202-WA0010.webp'
  },
  {
    title: 'Gear Aluminium Custom',
    description: 'Pengerjaan gear berbahan aluminium dengan detail sesuai kebutuhan komponen transmisi.',
    category: 'Custom Gear',
    image: 'IMG-20251209-WA0017.webp'
  },
  {
    title: 'Komponen Mesin Industri',
    description: 'Komponen mesin industri dengan dimensi besar, pengerjaan dengan mesin bubut menghasilkan hasil yang berkualitas.',
    category: 'Bubut Besi',
    image: 'IMG-20251219-WA0017.webp'
  },
  {
    title: 'Shaft dengan Keyway',
    description: 'Shaft dengan keyway yang presisi, pengerjaan detail dengan hasil yang akurat untuk aplikasi transmisi.',
    category: 'Komponen Transmisi',
    image: 'IMG20251210183956.webp'
  }
]
