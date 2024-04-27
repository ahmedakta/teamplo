<template>
  <div class="item-section bg-[#f3f7f8]" v-show="items.length">
    <div v-for="item in items" :key="item.id" class="item">
      <!-- Your item design goes here -->
      <Prop
        :header="item.name"
        :description="item.description"
        :image="item.image"
        :features="item.features"
      />
    </div>
  </div>
</template>

<script setup>
import Prop from '@/components/Frontend/Prop.vue'
defineProps({
  items: Array
})
</script>
