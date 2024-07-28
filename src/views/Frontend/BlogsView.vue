<template>
  <MainLayout>
    <!-- Blog filter section -->
    <section class="container mx-auto py-40 text-black">
      <h2 class="text-2xl text-center mb-8 text-black font-semibold">
        <span class="text-[#3AA9D0] font-semibold">Teamplo</span> Blogs
      </h2>
      <div class="flex">
        <!-- Filter 1  -->
        <div class="flex px-4">
          <img src="@/assets/icons/menu.svg" alt="" />
          <p>Category: Software</p>
        </div>
        <div class="flex px-4">
          <img src="@/assets/icons/sort.svg" alt="" />
          <p>Sort: Most Read</p>
        </div>
      </div>
      <Blogs :blogs="blogs" header="" />
    </section>
    <!-- Blogs List Section -->
  </MainLayout>
  <!-- Header Section -->
</template>
<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
import { ref } from 'vue'
import Blogs from '@/components/Frontend/Blogs.vue'

const blogs = ref([
  {
    id: 1,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: 'src/assets/blogs/blog1.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 2,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog2.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 3,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog3.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 4,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog4.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 1,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog1.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 2,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog2.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 3,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog3.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 4,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog4.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  }
])
</script>
