<template>
  <RouterLink :to="'/department/' + slug">
    <div class="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg">
      <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-gray-700">
        {{ description }}
      </p>
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
