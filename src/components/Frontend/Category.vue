<template>
  <div
    class="relative text-center justify-center max-w-screen-xl px-20 pt-10 pb-8 mx-auto lg:pt-18"
  >
    <img :src="category.image" class="block w-full max-h-96 object-contain mx-auto" />
  </div>
</template>

<script setup>
defineProps({
  category: Object
})
</script>
