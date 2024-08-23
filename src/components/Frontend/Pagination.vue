<template>
  <div v-for="(link, index) in links" :key="index">
    {{ link }}
  </div>
</template>
<script setup>
defineProps({
  links: Array
})
</script>
