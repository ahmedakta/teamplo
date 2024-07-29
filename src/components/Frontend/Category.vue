<template>
  <li
    class="bg-white px-4 py-3 shadow border-[1px] rounded-xl transition-colors duration-300 ease-in-out"
  >
    <a class="inline-flex font-bold text-xl items-center rounded-lg w-full" aria-current="page">
      {{ category.header }}
      <i class="ml-auto">
        <font-awesome-icon v-if="activeTab == category.tab" :icon="['fa', 'arrow-down']" />
        <font-awesome-icon v-else :icon="['fa', 'arrow-right']" />
      </i>
    </a>
    <p v-if="activeTab == category.tab" class="mt-5 text-black">
      {{ category.description }}
    </p>
  </li>
</template>

<script setup>
defineProps({
  activeTab: String,
  category: Object
})
</script>
