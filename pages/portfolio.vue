<template>
  <div class="portfolio-page">
    <section class="page-header parallax-container" ref="headerRef">
      <div class="header-overlay"></div>
      <div class="container">
        <h1 class="metallic-text">Portfolio</h1>
        <p>Hasil karya dan proyek yang telah kami kerjakan</p>
      </div>
    </section>

    <section class="portfolio-gallery">
      <div class="container">
        <div class="gallery-grid">
          <article
            v-for="(item, index) in portfolioItems"
            :key="index"
            class="portfolio-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <figure class="portfolio-image">
              <img
                :src="getImageUrl(item.image)"
                :alt="`${item.title} - Bengkel Bubut Damai`"
                loading="lazy"
                class="parallax-element"
                @error="handleImageError"
              />
              <div class="image-overlay"></div>
            </figure>
            <div class="portfolio-info">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <span class="portfolio-category">{{ item.category }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="portfolio-cta parallax-container">
      <div class="cta-overlay"></div>
      <div class="container">
        <div class="cta-content">
          <h2 class="metallic-text">Ingin Hasil Serupa?</h2>
          <p>Konsultasikan proyek Anda dengan kami dan dapatkan hasil berkualitas tinggi</p>
          <WhatsAppButton large />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { portfolioItems } from '~/config/portfolio'

const headerRef = ref<HTMLElement | null>(null)

// Helper function untuk mendapatkan URL gambar dari assets
const getImageUrl = (filename: string) => {
  // Di Nuxt 3, kita bisa menggunakan path yang akan di-resolve oleh Vite
  // Untuk development dan production, path ini akan di-handle dengan benar
  return `/images/${filename}`
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%232a2a2a" width="400" height="300"/%3E%3Ctext fill="%23808080" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EGambar tidak ditemukan%3C/text%3E%3C/svg%3E'
}

onMounted(() => {
  const isDesktopParallax = window.matchMedia('(min-width: 769px)').matches

  // Parallax effect untuk header (desktop only)
  const handleScroll = () => {
    if (isDesktopParallax && headerRef.value) {
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.16
      headerRef.value.style.transform = `translateY(${parallax}px)`
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Parallax effect untuk portfolio items dengan Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })

  const portfolioItems = document.querySelectorAll('.portfolio-item')
  portfolioItems.forEach((item) => {
    observer.observe(item)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    observer.disconnect()
  })
})

useHead({
  title: 'Portfolio - Bengkel Bubut Damai | Hasil Karya Kami',
  meta: [
    {
      name: 'description',
      content: 'Lihat portfolio hasil karya Bengkel Bubut Damai: bubut besi, bubut stainless, dan bubut custom part. Kualitas profesional untuk setiap proyek.'
    },
    {
      name: 'keywords',
      content: 'portfolio bengkel bubut, hasil karya bubut, contoh pekerjaan bubut, bubut logam profesional'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/portfolio' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portfolio Bengkel Bubut Damai',
        mainEntity: portfolioItems.map((item) => ({
          '@type': 'CreativeWork',
          name: item.title,
          description: item.description,
          image: `/images/${item.image}`
        }))
      })
    }
  ]
})
</script>

<style scoped>
.portfolio-page {
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

.portfolio-gallery {
  padding: 4rem 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  position: relative;
}

.portfolio-gallery::before {
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.portfolio-item {
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s;
  border: 1px solid rgba(192, 192, 192, 0.1);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.portfolio-item.animate-in {
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

.portfolio-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(192, 192, 192, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.portfolio-image {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  position: relative;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.portfolio-item:hover .image-overlay {
  opacity: 1;
}

.portfolio-item:hover .portfolio-image img {
  transform: scale(1.1);
}

.portfolio-info {
  padding: 1.5rem;
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
}

.portfolio-info h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #e0e0e0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.portfolio-info p {
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.portfolio-category {
  display: inline-block;
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  color: #e0e0e0;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(192, 192, 192, 0.2);
}

.portfolio-cta {
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
    transform: none !important;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .portfolio-gallery {
    padding: 3rem 0;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .portfolio-item:hover {
    transform: none;
  }

  .portfolio-cta {
    padding: 3rem 0;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>

