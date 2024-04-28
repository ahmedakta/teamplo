<template>
  <div class="flex h-screen">
    <SideNav />
    <div class="flex-1 bg-gray-100">
      <slot />
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/Frontend/TopNav.vue'
import SideNav from '@/components/Backend/SideNav.vue'
import Footer from '@/components/Frontend/Footer.vue'
</script>
