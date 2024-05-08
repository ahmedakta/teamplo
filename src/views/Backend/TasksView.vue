<template>
  <MainLayout>
    <div class="flex justify-center text-black">
      <!-- Tasks Column -->
      <div class="flex flex-col items-center mr-4 overflow-y-auto max-h-[540px]">
        <h2 class="text-xl font-semibold mb-2">Tasks</h2>
        <div class="bg-white rounded-md shadow-md p-4 w-96">
          <!-- Task Cards will go here -->
          <div
            class="border-b border-gray-200 pb-2 mb-2"
            v-for="(task, key) in taskStore.tasks"
            :key="key"
          >
            <p class="font-semibold">{{ task.name }}</p>
            <p class="text-gray-600">{{ task.description }}.</p>
          </div>
          <!-- Add more task cards as needed -->
        </div>
      </div>

      <!-- Completed Column -->
      <div class="flex flex-col items-center mr-4">
        <h2 class="text-xl font-semibold mb-2">Completed</h2>
        <div class="bg-white rounded-md shadow-md p-4 w-96">
          <!-- Completed Task Cards will go here -->
        </div>
      </div>

      <!-- Waiting Column -->
      <div class="flex flex-col items-center">
        <h2 class="text-xl font-semibold mb-2">Waiting</h2>
        <div class="bg-white rounded-md shadow-md p-4 w-96">
          <!-- Waiting Task Cards will go here -->
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
