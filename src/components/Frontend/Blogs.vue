<template>
  <h1 v-if="header" class="text-4xl text-center font-bold py-10 text-black">
    {{ header }}
  </h1>
  <div class="flex flex-wrap justify-center md:justify-between mx-auto py-5 container">
    <swiper
      :modules="[Pagination]"
      :slides-per-view="1"
      :space-between="10"
      :pagination="{
        dynamicBullets: true
      }"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 }
      }"
    >
      <swiper-slide v-for="(blog, index) in blogs" :key="index">
        <Blog :blog="blog" class="mb-10" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import Blog from '@/components/Frontend/Blog.vue'
// Import Swiper Vue.js components with style
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps({
  header: String,
  blogs: Array
})
</script>
