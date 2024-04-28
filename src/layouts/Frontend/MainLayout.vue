<template>
  <TopNav />
  <slot />
  <Footer />
</template>

<script setup>
import TopNav from '@/components/Frontend/TopNav.vue'
import Footer from '@/components/Frontend/Footer.vue'
</script>
