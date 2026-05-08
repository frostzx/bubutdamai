<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import faviconPng from '~/assets/images/logo/BengkelBubutDamai.png?url'

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: faviconPng, key: 'icon' },
    { rel: 'shortcut icon', type: 'image/png', href: faviconPng, key: 'shortcut-icon' },
    { rel: 'apple-touch-icon', href: faviconPng, key: 'apple-touch-icon' }
  ]
})
</script>

