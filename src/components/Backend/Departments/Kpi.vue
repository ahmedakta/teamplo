<template>
  <div class="p-4 md:p-8">
    <h1 class="text-3xl font-bold mb-4">{{ department.department_name }}</h1>
    <p class="text-gray-600 mb-8">{{ department.department_desc }}</p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Todo Column -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2 rounded-lg p-2 bg-orange-100">Todo</h2>
        <ul>
          <li v-for="task in tasks" :key="task.id" class="mb-2 p-2 bg-gray-100 rounded-lg">
            <h3 class="text-lg font-semibold mb-1">{{ task.name }}</h3>
            <div class="text-sm text-gray-700 mb-2">{{ task.description }}</div>
            <div class="flex space-x-4 mb-2">
              <button @click="togglePriority" class="flex items-center">
                <i :class="priorityIcon" class="fas fa-lg"></i>
                <font-awesome-icon :icon="['fas', 'flag']" />
              </button>

              <button @click="assignUser" class="flex items-center">
                <i class="fas fa-user fa-lg"></i>
                <font-awesome-icon :icon="['fas', 'user']" />
              </button>

              <button @click="startTimer" class="flex items-center">
                <font-awesome-icon :icon="['fas', 'stopwatch']" />
              </button>

              <button @click="toggleStatus" class="flex items-center">
                <i :class="statusIcon" class="fas fa-lg"></i>
                <font-awesome-icon :icon="['fas', 'check']" />
              </button>
            </div>
          </li>
        </ul>
      </div>

      <!-- In Progress Column -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2 rounded-lg p-2 bg-blue-100">In Progress</h2>
        <ul>
          <li
            v-for="task in inProgressTasks"
            :key="task.id"
            class="mb-2 p-2 bg-yellow-100 rounded-lg"
          >
            {{ task.name }}
          </li>
        </ul>
      </div>

      <!-- Cancelled Column -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2 rounded-lg p-2 bg-red-100">Cancelled</h2>
        <ul>
          <li v-for="task in cancelledTasks" :key="task.id" class="mb-2 p-2 bg-red-100 rounded-lg">
            {{ task.name }}
          </li>
        </ul>
      </div>
      <!-- Done Column -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2 rounded-lg p-2 bg-green-100">Done</h2>
        <ul>
          <li v-for="task in cancelledTasks" :key="task.id" class="mb-2 p-2 bg-red-100 rounded-lg">
            {{ task.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  tasks: Object,
  department: Object
})
</script>
