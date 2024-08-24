<template>
  <RouterLink
    :to="`/blogs/${blog.slug}`"
    class="max-w-96 w-full rounded-xl overflow-hidden shadow-lg m-4 items-center justify-center mx-auto"
  >
    <div class="relative w-full h-48">
      <img
        class="w-full h-full object-cover"
        :src="
          blog.content_image
            ? `${generalStore.dir}/blogs/${blog.content_image}`
            : `${generalStore.dir}/blogs/default-blog.png`
        "
        alt="Blog Image"
      />
      <div class="absolute bottom-2 right-2 bg-opacity-75 px-2 py-1 rounded">
        <!-- Ratings -->
        <span class="text-blue-400 bg-white rounded-xl px-1 py-1 text-sm font-semibold">
          <font-awesome-icon :icon="['fa', 'eye']" />
          {{ blog.param_views }}
        </span>
      </div>
    </div>
    <div class="px-6 py-4">
      <h1 class="text-black text-base">
        {{ blog.content_title }}
      </h1>
      <!-- Reading time -->
      <div class="mt-5 py-4">
        <div class="flex justify-between">
          <div>
            <font-awesome-icon class="text-[#3AA9D0]" :icon="['fa', 'book-open-reader']" />
            {{ blog.reading_time }} Minute Read
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
  </RouterLink>
</template>

<script setup>
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()

defineProps({
  blog: Object
})
</script>
