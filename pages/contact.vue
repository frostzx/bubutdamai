<template>
  <div class="contact-page">
    <section class="page-header parallax-container" ref="headerRef">
      <div class="header-overlay"></div>
      <div class="container">
        <h1 class="metallic-text">Kontak Kami</h1>
        <p>Hubungi kami untuk konsultasi dan penawaran terbaik</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-info-section">
          <h2 class="section-title">Informasi Kontak</h2>
          <div class="info-item" v-for="(info, index) in contactInfo" :key="index">
            <div class="info-icon">{{ info.icon }}</div>
            <div>
              <h3>{{ info.title }}</h3>
              <p v-html="info.content"></p>
              <WhatsAppButton v-if="info.showButton" />
            </div>
          </div>
        </div>

        <div class="locations-section">
          <h2 class="section-title">Lokasi Bengkel Kami</h2>
          <div class="locations-grid">
            <div
              v-for="(location, index) in locations"
              :key="index"
              class="location-card"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <h3>{{ location.name }}</h3>
              <div class="location-address">
                <div class="address-icon">📍</div>
                <p>{{ location.address }}</p>
              </div>
              <div class="map-wrapper">
                <iframe
                  :src="getGoogleMapsEmbedUrl(location)"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  :title="`Lokasi ${location.name}`"
                ></iframe>
              </div>
              <a
                :href="getGoogleMapsLink(location)"
                target="_blank"
                rel="noopener noreferrer"
                class="map-link"
              >
                Buka di Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-cta parallax-container">
      <div class="cta-overlay"></div>
      <div class="container">
        <div class="cta-content">
          <h2 class="metallic-text">Siap Memulai Proyek Anda?</h2>
          <p>Konsultasikan kebutuhan bubut logam Anda sekarang dan dapatkan penawaran terbaik</p>
          <WhatsAppButton large />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { locations, getGoogleMapsEmbedUrl, getGoogleMapsLink } from '~/config/locations'

const headerRef = ref<HTMLElement | null>(null)

const contactInfo = [
  {
    icon: '📱',
    title: 'WhatsApp',
    content: 'Hubungi kami melalui WhatsApp untuk konsultasi cepat',
    showButton: true
  },
  {
    icon: '⏰',
    title: 'Jam Operasional',
    content: 'Senin - Jumat: 08:00 - 17:00 WIB<br>Sabtu: 08:00 - 14:00 WIB<br>Minggu: Tutup',
    showButton: false
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
  
  // Animation untuk location cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.location-card').forEach((card) => {
    observer.observe(card)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    observer.disconnect()
  })
})

useHead({
  title: 'Kontak - Bengkel Bubut Damai | Hubungi Kami',
  meta: [
    {
      name: 'description',
      content: 'Hubungi Bengkel Bubut Damai untuk konsultasi jasa bubut logam. Alamat, WhatsApp, dan jam operasional. Dapatkan penawaran terbaik untuk proyek Anda.'
    },
    {
      name: 'keywords',
      content: 'kontak bengkel bubut, alamat bengkel bubut, WhatsApp bengkel bubut, jasa bubut logam'
    }
  ]
})
</script>

<style scoped>
.contact-page {
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

.contact-content {
  padding: 5rem 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  position: relative;
}

.contact-content::before {
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

.contact-info-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #e0e0e0;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(192, 192, 192, 0.1);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s, box-shadow 0.3s;
}

.info-item:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.info-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #e0e0e0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.info-item p {
  color: #b0b0b0;
  line-height: 1.8;
}

.locations-section {
  margin-top: 4rem;
  position: relative;
  z-index: 1;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.location-card {
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(192, 192, 192, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.location-card.animate-in {
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

.location-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(192, 192, 192, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.location-card h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.location-address {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.address-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.location-address p {
  color: #b0b0b0;
  line-height: 1.8;
  margin: 0;
}

.map-wrapper {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid rgba(192, 192, 192, 0.1);
}

.map-wrapper iframe {
  border-radius: 8px;
}

.map-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #c0c0c0;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid rgba(192, 192, 192, 0.2);
}

.map-link:hover {
  color: #e0e0e0;
  background: rgba(192, 192, 192, 0.1);
  border-color: rgba(192, 192, 192, 0.3);
  transform: translateX(4px);
}

.contact-cta {
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

@media (max-width: 968px) {
  .locations-grid {
    grid-template-columns: 1fr;
  }

  .map-wrapper {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 0;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .contact-content {
    padding: 3rem 0;
  }

  .contact-cta {
    padding: 3rem 0;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>

