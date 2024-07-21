<template>
  <MainLayout>
    <div class="container max-w-[7xl] mx-auto flex flex-wrap justify-between">
      <!-- KPI cards -->
      <div class="flex flex-wrap justify-between mb-5">
        <!-- KPI Card 1 -->
        <div
          class="bg-white rounded-lg shadow-md p-6 w-full sm:w-[calc(50%-2rem)] md:w-[23.5rem] m-1"
        >
          <div class="flex items-center justify-between">
            <span class="text-gray-700 text-sm">Total Pages:</span>
            <span class="text-gray-700 text-sm">{{ data.content_count }}</span>
          </div>
        </div>
        <div
          class="bg-white rounded-lg shadow-md p-6 w-full sm:w-[calc(50%-2rem)] md:w-[23.5rem] m-1"
        >
          <div class="flex items-center justify-between">
            <span class="text-gray-700 text-sm">Total Categories:</span>
            <span class="text-gray-700 text-sm">{{ data.category_count }}</span>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { onMounted, ref } from 'vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
const data = ref([])
onMounted(() => {
  try {
    generalStore.makeRequest('/api/content-creator/dashboard').then(() => {
      data.value = generalStore.data
    })
  } catch (error) {
    console.log(error)
  }
})
</script>
