<template>
  {{ header }}
  <div v-for="blog in blogs" :key="blog.id">
    <Blog :blog="blog" />
  </div>
</template>

<script setup>
import Blog from '@/components/Frontend/Blog.vue'
defineProps({
  header: String,
  blogs: Array
})
</script>
