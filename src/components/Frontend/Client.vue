<template>
  <!-- Client 1  -->
  <div :class="client.bgColor" class="p-5 w-full rounded-xl overflow-hidden shadow-lg m-4">
    <!-- Client Info  -->
    <span class="flex text-center py-3">
      <img :src="client.image" alt="Blog Image" />
      <h4 class="p-3">{{ client.name }}</h4>
    </span>
    <!-- Client Header -->
    <h1 class="font-semibold">{{ client.header }}</h1>
    <!-- Client Message -->
    <p class="py-4">
      {{ client.description }}
    </p>
    <!-- Client Ratings -->
    <div class="">
      <ul class="flex">
        <li><img src="@/assets/rate-star.svg" alt="" /></li>
        <li><img src="@/assets/rate-star.svg" alt="" /></li>
        <li><img src="@/assets/rate-star.svg" alt="" /></li>
        <li><img src="@/assets/rate-star.svg" alt="" /></li>
        <li><img src="@/assets/rate-star.svg" alt="" /></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  client: Object
})
</script>
