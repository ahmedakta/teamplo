<template>
  <MainLayout>
    <div class="max-w-6xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Departments</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg"
      >
        <h2 class="text-2xl font-semibold mb-2">IT</h2>
        <p class="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugit.</p>
      </div>
      <div
        class="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg"
      >
        <h2 class="text-2xl font-semibold mb-2">Marketing</h2>
        <p class="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugit.</p>
      </div>
      <div
        class="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg"
      >
        <h2 class="text-2xl font-semibold mb-2">Sales</h2>
        <p class="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugit.</p>
      </div>
      <div
        class="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg"
      >
        <h2 class="text-2xl font-semibold mb-2">Design</h2>
        <p class="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugit.</p>
      </div>
    </div>
  </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useTaskStore } from '@/stores/teskStore'
const taskStore = useTaskStore()
const errors = ref()
onMounted(() => {
  taskStore.fetchTasks()
})
const deleteTask = async (task) => {
  errors.value = null

  try {
    await taskStore.getTokens()
    await taskStore.deleteTask(task)
    // , { withCredentials: true }
  } catch (error) {
    errors.value = error.response.data.errors
  }
}
const task = ref('')
</script>
