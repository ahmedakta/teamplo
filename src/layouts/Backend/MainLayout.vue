<template>
  <div class="flex bg-gray-100 h-screen">
    <SideNav />
    <div class="flex-1">
      <TopNav />
      <slot />
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/Backend/TopNav.vue'
import SideNav from '@/components/Backend/SideNav.vue'
</script>
