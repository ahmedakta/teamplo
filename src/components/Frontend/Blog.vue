<template>
  <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
    <img class="w-full" :src="blog.image" alt="Blog Image" />
    <div class="px-6 py-4">
      <div class="py-4">
        <span
          class="inline-block text-gray-500 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{ blog.created_at }}</span
        >
      </div>
      <a class="text-black text-base" href="#">
        {{ blog.header }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blog: Object
})
</script>
