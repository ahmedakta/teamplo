<template>
  <TopNav />
  <slot />
  <Modals />
  <SideNav />
  <Footer />
</template>

<script setup>
import TopNav from '@/components/Frontend/TopNav.vue'
import Footer from '@/components/Frontend/Footer.vue'
import Modals from '@/components/Backend/Modals.vue'
import SideNav from '@/components/Frontend/SideNav.vue'
</script>
