<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <NuxtLink to="/" class="logo">
          Bengkel Bubut Damai
        </NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/" active-class="active">Beranda</NuxtLink></li>
          <li><NuxtLink to="/services" active-class="active">Layanan</NuxtLink></li>
          <li><NuxtLink to="/portfolio" active-class="active">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/contact" active-class="active">Kontak</NuxtLink></li>
        </ul>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul class="nav-links mobile" :class="{ active: mobileMenuOpen }">
        <li><NuxtLink to="/" active-class="active" @click="closeMobileMenu">Beranda</NuxtLink></li>
        <li><NuxtLink to="/services" active-class="active" @click="closeMobileMenu">Layanan</NuxtLink></li>
        <li><NuxtLink to="/portfolio" active-class="active" @click="closeMobileMenu">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/contact" active-class="active" @click="closeMobileMenu">Kontak</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: #fff;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(192, 192, 192, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e0e0e0;
  text-decoration: none;
  transition: all 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.logo:hover {
  color: #c0c0c0;
  text-shadow: 0 2px 8px rgba(192, 192, 192, 0.3);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-links a:hover,
.nav-links a.active {
  color: #c0c0c0;
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #c0c0c0, transparent);
  box-shadow: 0 0 8px rgba(192, 192, 192, 0.5);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #fff;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-links:not(.mobile) {
    display: none;
  }

  .nav-links.mobile {
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    border-top: 1px solid #333;
    margin-top: 1rem;
  }

  .nav-links.mobile.active {
    display: flex;
  }

  .nav-links.mobile a {
    padding: 0.5rem 0;
  }
}
</style>

