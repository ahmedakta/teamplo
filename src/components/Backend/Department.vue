<template>
  <RouterLink :to="'/department/' + slug">
    <div class="bg-white shadow-md rounded-lg p-6 cursor-pointer h-64 flex flex-col justify-between hover:shadow-lg">
      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
        <p class="text-gray-700 flex-grow overflow-hidden">
          {{ description }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  title: Text,
  description: Text,
  slug: Text
})
</script>
