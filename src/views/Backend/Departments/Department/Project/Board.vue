<template>
  <MainLayout>
    <div class="p-4 md:p-8">
      <h1 class="text-2xl font-bold mb-4" v-if="data.department">
        {{ data.department.department_name }} - {{ data.project.project_name }} project
      </h1>
      <!-- Filter Section -->
      <button
        class="text-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-none w-full md:w-auto"
        type="button"
        @click="isOpen = !isOpen"
      >
        <font-awesome-icon :icon="['fa', 'bars']" />
      </button>
      <!-- End Of  Filter Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gray-200 p-4 rounded-lg shadow">
          <div class="flex items-center justify-between mb-2 p-2 bg-orange-100 rounded-lg">
            <h2 class="text-xl font-semibold">Todo</h2>
            <!-- buttons section -->
            <div class="text-gray-600 space-x-2">
              <button class="bg-white py-1 px-2 rounded-lg">
                <font-awesome-icon :icon="['fas', 'bars']" />
              </button>
              <button class="bg-white py-1 px-2 rounded-lg">
                <font-awesome-icon :icon="['fas', 'plus']" />
              </button>
            </div>
          </div>
          <ul>
            <li v-for="task in data.tasks" :key="task.id" class="mb-2 p-2 bg-white rounded-lg">
              <h3 class="text-lg font-semibold mb-1">
                <font-awesome-icon class="cursor-grab" :icon="['fas', 'grip']" /> {{ task.name }}
              </h3>
              <div class="text-sm text-gray-700 mb-2">{{ task.description }}</div>
              <div class="flex space-x-4 mb-2">
                <div class="flex items-center">
                  <!-- Assigned Users Section -->
                  <div class="w-40">
                    <!-- Display assigned users -->
                    <div class="flex items-center justify-between border-b">
                      <div class="flex items-center">
                        <div class="flex -space-x-2">
                          <div class="relative group" data-username="User 1">
                            <img
                              class="w-10 h-10 rounded-full border-2 border-white"
                              src="@/assets/default_profile_image.png"
                              alt="User 1"
                            />
                            <div
                              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl rounded-full opacity-0 group-hover:opacity-100"
                            >
                              ×
                            </div>
                            <div
                              class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-4 py-1 rounded opacity-0 group-hover:opacity-100"
                            >
                              User 1
                            </div>
                          </div>
                          <div class="relative group">
                            <img
                              class="w-10 h-10 rounded-full border-2 border-white"
                              src="@/assets/default_profile_image.png"
                              alt="User 1"
                            />
                            <div
                              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl rounded-full opacity-0 group-hover:opacity-100"
                            >
                              ×
                            </div>
                            <div
                              class="absolute mb-100 inset-0 flex items-center justify-center bg-black bg-opacity-60 text-black text-xl rounded-full opacity-0 group-hover:opacity-100"
                            >
                              a
                            </div>
                          </div>
                          <div class="relative group">
                            <img
                              class="w-10 h-10 rounded-full border-2 border-white"
                              src="@/assets/default_profile_image.png"
                              alt="User 1"
                            />
                            <div
                              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl rounded-full opacity-0 group-hover:opacity-100"
                            >
                              ×
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-center w-10 h-10 text-green-800 bg-green-100 rounded-full"
                        >
                          +
                        </div>
                      </div>
                      <!-- <button
                    @click="removeUser(index)"
                    class="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Remove
                  </button> -->
                    </div>
                  </div>
                </div>
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
            <li
              v-for="task in cancelledTasks"
              :key="task.id"
              class="mb-2 p-2 bg-red-100 rounded-lg"
            >
              {{ task.name }}
            </li>
          </ul>
        </div>
        <!-- Done Column -->
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-2 rounded-lg p-2 bg-green-100">Done</h2>
          <ul>
            <li
              v-for="task in cancelledTasks"
              :key="task.id"
              class="mb-2 p-2 bg-red-100 rounded-lg"
            >
              {{ task.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useGeneralStore } from '@/stores/general'
import { useRoute } from 'vue-router'
const route = useRoute()
const data = ref([])

const generalStore = useGeneralStore()
const props = defineProps({
  department_slug: String,
  project_slug: String
})

onMounted(() => {
  try {
    getTasks()
  } catch (error) {
    console.log(error)
  }
})

const getTasks = async (filterParams = null) => {
  let url =
    '/api/department/' + route.params.department_slug + '/' + route.params.project_slug + '/tasks'

  generalStore.makeRequest(url, filterParams).then(() => {
    // custimize values for datatable library
    if (generalStore.data) {
      data.value = generalStore.data.data
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
</script>
