<template>
  <div class="services-page">
    <section class="page-header parallax-container" ref="headerRef">
      <div class="header-overlay"></div>
      <div class="container">
        <h1 class="metallic-text">Layanan Kami</h1>
        <p>Kami menyediakan berbagai layanan bubut logam untuk memenuhi kebutuhan Anda</p>
      </div>
    </section>

    <section class="services-list">
      <div class="container">
        <div class="services-grid">
          <div 
            v-for="(service, index) in services"
            :key="index"
            class="service-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="(feature, idx) in service.features" :key="idx">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="services-cta parallax-container">
      <div class="cta-overlay"></div>
      <div class="container">
        <div class="cta-content">
          <h2 class="metallic-text">Butuh Konsultasi?</h2>
          <p>Hubungi kami untuk mendapatkan penawaran terbaik sesuai kebutuhan proyek Anda</p>
          <WhatsAppButton large />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)

const services = [
  {
    icon: '🔩',
    title: 'Bubut Besi',
    description: 'Pengerjaan material besi dengan mesin bubut yang terawat baik dan teknisi berpengalaman. Kami mengerjakan berbagai ukuran dari komponen kecil hingga part besar dengan presisi tinggi dan hasil yang rapi.',
    features: [
      'Teknisi ahli berpengalaman',
      'Material: Besi hitam, besi cor, baja',
      'Presisi tinggi & hasil rapi',
      'Ukuran fleksibel sesuai kebutuhan'
    ]
  },
  {
    icon: '✨',
    title: 'Bubut Stainless',
    description: 'Pengerjaan stainless steel dengan keahlian khusus menghasilkan finishing halus dan hasil yang memuaskan. Ideal untuk aplikasi yang memerlukan ketahanan korosi dan estetika yang baik.',
    features: [
      'Finishing halus & rapi',
      'Material: SS 304, 316, 316L',
      'Hasil presisi & berkualitas',
      'Tahan korosi & estetika baik'
    ]
  },
  {
    icon: '🎨',
    title: 'Bubut Custom Part',
    description: 'Menerima pesanan custom part sesuai desain dan spesifikasi yang Anda butuhkan. Dikerjakan dengan teliti oleh teknisi berpengalaman untuk memastikan hasil sesuai harapan, dari prototipe hingga produksi dalam jumlah tertentu.',
    features: [
      'Desain sesuai kebutuhan',
      'Prototipe & produksi',
      'Konsultasi gratis',
      'Quality control terjamin'
    ]
  },
  {
    icon: '🔧',
    title: 'Repair Komponen Mesin',
    description: 'Jasa perbaikan dan refurbishment komponen mesin yang rusak dengan keahlian teknisi berpengalaman. Kami dapat memperbaiki berbagai komponen mesin industri dengan hasil seperti baru dan garansi pengerjaan.',
    features: [
      'Repair dengan presisi',
      'Restorasi dimensi akurat',
      'Hasil seperti baru',
      'Garansi pengerjaan'
    ]
  }
]

onMounted(() => {
  // Parallax effect untuk header
  const handleScroll = () => {
    if (headerRef.value) {
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.3
      headerRef.value.style.transform = `translateY(${parallax}px)`
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Animation untuk service cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.service-card').forEach((card) => {
    observer.observe(card)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    observer.disconnect()
  })
})

useHead({
  title: 'Layanan - Bengkel Bubut Damai | Jasa Bubut Logam',
  meta: [
    {
      name: 'description',
      content: 'Layanan bubut logam profesional: bubut besi, bubut stainless, bubut custom part, dan repair komponen mesin. Hubungi Bengkel Bubut Damai untuk konsultasi.'
    },
    {
      name: 'keywords',
      content: 'jasa bubut, bubut besi, bubut stainless, bubut custom, repair komponen mesin, bengkel bubut'
    }
  ]
})
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}

.page-header {
  position: relative;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%);
  color: #fff;
  padding: 6rem 0;
  text-align: center;
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(128, 128, 128, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.page-header .container {
  position: relative;
  z-index: 1;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.page-header p {
  font-size: 1.2rem;
  color: #c0c0c0;
}

.services-list {
  padding: 5rem 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  position: relative;
}

.services-list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(192, 192, 192, 0.02) 10px,
      rgba(192, 192, 192, 0.02) 20px
    );
  pointer-events: none;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.service-card {
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s;
  border: 1px solid rgba(192, 192, 192, 0.1);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.service-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(192, 192, 192, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-card h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.service-card p {
  color: #b0b0b0;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid rgba(192, 192, 192, 0.1);
  padding-top: 1rem;
}

.service-features li {
  color: #c0c0c0;
  padding: 0.6rem 0;
  position: relative;
  padding-left: 1.8rem;
  transition: color 0.3s;
}

.service-card:hover .service-features li {
  color: #e0e0e0;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #808080;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.service-card:hover .service-features li::before {
  color: #c0c0c0;
}

.services-cta {
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  color: #fff;
  text-align: center;
  overflow: hidden;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 50% 50%, rgba(192, 192, 192, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #c0c0c0;
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 0;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .services-list {
    padding: 3rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 2rem;
  }

  .services-cta {
    padding: 3rem 0;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>

