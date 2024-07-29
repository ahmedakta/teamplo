<template>
  <div class="bg-white text-black">
    <div class="container mx-auto py-10">
      <h1 class="md:text-4xl text-3xl text-center py-5 font-bold">
        <span class="text-[#3AA9D0] font-bold">Our Clients</span> Who's Loved Teamplo
      </h1>
      <p class="text-center py-5 text-black max-w-4xl mx-auto px-5">
        {{ description }}
      </p>
      <!-- List The Clients -->
      <div class="flex flex-wrap justify-center md:justify-between mx-auto py-5 container">
        <swiper
          :modules="[Pagination]"
          :slides-per-view="1"
          :space-between="10"
          :pagination="{
            dynamicBullets: true
          }"
          :breakpoints="{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }"
        >
          <swiper-slide v-for="(client, index) in clients" :key="index">
            <Client :client="client" class="mb-10" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
import Client from '@/components/Frontend/Client.vue'
// Import Swiper Vue.js components with style
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
defineProps({
  description: String,
  clients: Array
})
</script>
