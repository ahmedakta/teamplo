<template>
  <div class="flex flex-wrap container mx-auto mb-10 mt-10">
    <div class="w-1/2 p-10">
      <h1 class="text-2xl font-bold">{{ header }}</h1>
      <p class="align-left mt-20 font-semibold text-black-500">{{ description }}</p>
      <!-- Features Buttons -->
      <div v-show="features.length" class="flex justify-between w-[20rem] mx-auto">
        <div v-for="feature in features" :key="feature.id">
          <button
            :class="
              feature.isfeatured
                ? 'bg-[#49C1EC] text-white'
                : 'text-[#A9E0F4] bg-white border border-[#A9E0F4]'
            "
            class="p-3 mt-10 rounded w-[5rem]"
          >
            {{ feature.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-10">
      <img :src="image" class="w-[40rem] mx-auto" alt="" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: Array,
  image: String,
  description: String,
  header: String
})
</script>
