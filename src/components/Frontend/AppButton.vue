<template>
  <Button
    :class="{
      'inline-flex text-[#5DADE2] items-center justify-center   px-3 py-2 mb-2 mr-2 text-sm font-medium border border-gray-200 rounded-lg sm:w-auto focus:outline-none  focus:z-10 focus:ring-4 focus:ring-gray-200':
        type == 'primary',
      'bg-[#5DADE2] text-white': active,
      'bg-gray-800 text-white p-3 rounded px-20': type == 'dark'
    }"
    :disabled="processing"
  >
    <slot />
  </Button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'primary' },
  active: { type: Boolean, default: false },
  processing: { type: Boolean, default: false }
})
</script>
