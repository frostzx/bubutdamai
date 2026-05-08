<template>
  <div>
    <section class="hero parallax-container" ref="heroRef">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title metallic-text">Jasa Bubut Logam Profesional</h1>
          <p class="hero-subtitle">
            Bengkel Bubut Damai dengan pengalaman bertahun-tahun melayani berbagai kebutuhan bubut logam. 
            Dikerjakan langsung oleh teknisi berpengalaman menggunakan mesin bubut yang terawat baik, menghasilkan produk berkualitas dengan presisi tinggi. 
            Dari komponen industri hingga custom part, kami siap membantu mewujudkan proyek Anda dengan hasil yang memuaskan.
          </p>
          <p class="hero-location">
            📍 Melayani area lokal dan sekitarnya
          </p>
          <WhatsAppButton large />
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3>Teknisi Berpengalaman</h3>
            <p>Dikerjakan langsung oleh teknisi ahli dengan pengalaman puluhan tahun. Setiap pekerjaan dilakukan dengan teliti dan presisi untuk hasil yang berkualitas tinggi.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Pengerjaan Cepat & Terpercaya</h3>
            <p>Dengan mesin yang terawat baik dan proses kerja yang efisien, kami mampu menyelesaikan pesanan tepat waktu tanpa mengorbankan kualitas hasil.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Custom Part Sesuai Kebutuhan</h3>
            <p>Menerima pesanan custom part dari berbagai ukuran dan bentuk. Kami siap mewujudkan kebutuhan spesifik Anda dengan hasil yang memuaskan dan harga yang kompetitif.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Siap Mengerjakan Proyek Anda</h2>
          <p>Konsultasikan kebutuhan bubut logam Anda dengan kami sekarang</p>
          <WhatsAppButton large />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const isDesktopParallax = window.matchMedia('(min-width: 769px)').matches
  if (!isDesktopParallax) return

  // Parallax effect on scroll (desktop only)
  const handleScroll = () => {
    if (heroRef.value) {
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.22
      heroRef.value.style.transform = `translateY(${parallax}px)`
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

useHead({
  title: 'Bengkel Bubut Damai - Jasa Bubut Logam Profesional',
  meta: [
    {
      name: 'description',
      content: 'Bengkel Bubut Damai menyediakan jasa bubut logam profesional termasuk bubut besi, bubut stainless, dan bubut custom part, dan repair komponen mesin. Hubungi kami untuk konsultasi.'
    },
    {
      name: 'keywords',
      content: 'bengkel bubut, jasa bubut, bubut logam, bubut besi, bubut stainless, bubut custom, jasa bubut profesional'
    },
    {
      property: 'og:title',
      content: 'Bengkel Bubut Damai - Jasa Bubut Logam Profesional'
    },
    {
      property: 'og:description',
      content: 'Jasa bubut besi, stainless, custom part, dan repair komponen mesin untuk area lokal.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Bengkel Bubut Damai',
        description: 'Jasa bubut logam untuk kebutuhan industri dan custom part.',
        areaServed: 'Jakarta',
        telephone: '+62 815-1728-1614',
        image: '/images/IMG20251210183956.jpg'
      })
    }
  ]
})
</script>

<style scoped>
.hero {
  position: relative;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%);
  color: #fff;
  padding: 8rem 0;
  text-align: center;
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(192, 192, 192, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(128, 128, 128, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero .container {
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #c0c0c0;
}

.hero-location {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #a0a0a0;
}

.features {
  padding: 5rem 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  position: relative;
}

.features::before {
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.feature-card {
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s;
  border: 1px solid rgba(192, 192, 192, 0.1);
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(192, 192, 192, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.feature-card p {
  color: #b0b0b0;
  line-height: 1.6;
}

.cta-section {
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  color: #fff;
  text-align: center;
  overflow: hidden;
}

.cta-section::before {
  content: '';
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
  .hero {
    padding: 4rem 0;
    min-height: auto;
    transform: none !important;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .features {
    padding: 3rem 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-section {
    padding: 3rem 0;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>

