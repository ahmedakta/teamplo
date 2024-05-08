<template>
  <h1 class="text-4xl text-center font-bold py-10 text-black">
    {{ header }}
  </h1>
  <div class="flex flex-wrap w-[100rem] justify-between mx-auto py-5">
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
