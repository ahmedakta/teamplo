<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-4xl text-center font-bold">
      <span class="text-[#A9E0F4] font-bold">Categories</span> Of Teamplo
    </h1>
    <div class="flex flex-wrap justify-between w-[25rem] mt-5 mx-auto">
      <app-button
        v-for="category in categories"
        :key="category.id"
        :active="currentCategory.id == category.id"
        @click="currentCategory = category"
        >{{ category.name }}
      </app-button>
    </div>
    <Category :category="currentCategory" />
  </div>
</template>

<script setup>
import AppButton from '@/components/Frontend/AppButton.vue'
import Category from '@/components/Frontend/Category.vue'
import { ref, onMounted } from 'vue'
const props = defineProps({
  categories: Array
})
const currentCategory = ref(props.categories[0])
</script>
