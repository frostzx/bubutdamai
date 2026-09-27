<script setup lang="ts">
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => { open.value = false })
const links = [{to:'/',label:'Beranda'},{to:'/services',label:'Layanan'},{to:'/portfolio',label:'Hasil Pekerjaan'},{to:'/contact',label:'Kontak'}]
</script>
<template><header class="site-header"><div class="container nav-inner"><NuxtLink to="/" aria-label="Bengkel Bubut Damai — Beranda"><BrandLogo /></NuxtLink><button class="menu-toggle" :aria-expanded="open" aria-controls="main-nav" @click="open = !open" @keydown.esc="open = false">{{ open ? 'Tutup ×' : 'Menu ☰' }}</button><nav id="main-nav" :class="{open}" aria-label="Navigasi utama" @keydown.esc="open = false"><NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink><NuxtLink to="/contact#penawaran" class="button button-gold nav-cta">Minta Penawaran <span>↗</span></NuxtLink></nav></div></header></template>
