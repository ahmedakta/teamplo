<template>
  <div
    class="max-w-96 w-full rounded-xl overflow-hidden shadow-lg m-4 items-center justify-center mx-auto"
  >
    <div class="relative w-full h-48">
      <img class="w-full h-full object-cover" :src="blog.image" alt="Blog Image" />
      <div class="absolute top-2 right-2 py-1 px-2 text-white bg-gray-400 rounded-lg">
        <!-- Heart Icon -->
        <a href="#">
          <font-awesome-icon :icon="['fa-regular', 'heart']" />
        </a>
      </div>
      <div class="absolute bottom-2 right-2 bg-opacity-75 px-2 py-1 rounded">
        <!-- Ratings -->
        <span class="text-yellow-400 text-sm font-semibold">
          <font-awesome-icon :icon="['fa', 'star']" />
          3.9
        </span>
      </div>
    </div>
    <div class="px-6 py-4">
      <a class="text-black text-base" href="/blogs/example-blog">
        {{ blog.header }}
      </a>
      <!-- Reading time -->
      <div class="mt-5 py-4">
        <div class="flex justify-between">
          <div>
            <font-awesome-icon :icon="['fa-regular', 'clock']" />
            {{ blog.reading_time }}
          </div>
          <div>
            {{ blog.created_at }}
          </div>
        </div>
        <hr class="border-gray-300" />
      </div>
      <!-- Button -->
      <button class="text-white ml-1 py-2 px-4 w-full rounded bg-[#3AA9D0]">Read More</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blog: Object
})
</script>
