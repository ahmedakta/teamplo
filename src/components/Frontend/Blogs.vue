<template>
  <h1 v-if="header" class="text-4xl text-center font-bold py-10 text-black">
    {{ header }}
  </h1>
  <div class="flex flex-wrap justify-center md:justify-between mx-auto py-5 container">
    <Blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script setup>
import Blog from '@/components/Frontend/Blog.vue'
defineProps({
  header: String,
  blogs: Array
})
</script>
