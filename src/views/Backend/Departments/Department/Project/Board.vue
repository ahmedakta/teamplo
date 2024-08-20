<template>
  <MainLayout>
    <div class="p-4 md:p-8">
      <!-- Project PROGRESS KPI -->
      <div class="flex justify-between mb-5 bg-white rounded-2xl p-5">
        <div class="p-6 rounded-lg w-96" v-if="data.department">
          <div class="text-lg font-semibold mb-2">
            {{ data.department.department_name }} - {{ data.project.project_name }} project
          </div>
          <div class="flex justify-between items-center mb-2">
            <div class="text-gray-600">Progress</div>
            <div class="text-gray-800">45%</div>
          </div>
          <progress value="45" max="100" class="w-full"></progress>
        </div>
        <div class="p-6 rounded-lg w-96" v-if="data.project">
          <div class="text-lg flex font-semibold mb-2">
            <img src="@/assets/icons/calendar.svg" class="pr-1" alt="" />
            End Date : {{ data.project.project_end_at }} Days Left
          </div>
          <div class="flex justify-between items-center mb-2">
            <div class="text-gray-600"></div>
          </div>
          <!-- Display assigned users -->
          <div class="flex items-center justify-between border-b">
            <div class="flex items-right">
              <div class="flex -space-x-2">
                <div class="relative">
                  <img
                    class="w-10 h-10 rounded-full border-2 border-white"
                    src="@/assets/default_profile_image.png"
                    alt="User 1"
                  />
                  <div
                    class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-4 py-1 rounded opacity-0 group-hover:opacity-100"
                  >
                    User 1
                  </div>
                </div>
                <!-- Repeat for other users -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="bg-white mx-auto w-full flex justify-between mb-1 pt-5 rounded-2xl">
        <!-- Column filtration -->
        <div class="ml-1">
          <button
            class="border-[1px] text-gray-500 hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-none w-full md:w-auto"
            type="button"
            @click="isOpen = !isOpen"
          >
            <font-awesome-icon :icon="['fa', 'user']" />
          </button>
          <button
            class="border-[1px] text-gray-500 hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-none w-full md:w-auto"
            type="button"
            @click="isOpen = !isOpen"
          >
            <font-awesome-icon :icon="['fa', 'flag']" />
          </button>
          <button
            class="border-[1px] text-gray-500 hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-none w-full md:w-auto"
            type="button"
            @click="isOpen = !isOpen"
          >
            <font-awesome-icon :icon="['fa', 'calendar']" />
          </button>
          <button
            class="border-[1px] text-gray-500 hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-none w-full md:w-auto"
            type="button"
            @click="isOpen = !isOpen"
          >
            <font-awesome-icon :icon="['fa', 'check']" />
          </button>
        </div>
        <!-- Search -->
        <div class="mr-2">
          <input
            type="text"
            placeholder="Search for task .."
            class="border-gray-200 rounded-lg border-2 py-1 px-2"
          />
        </div>
      </div>
      <!-- End Of  Filter Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gray-200 p-4 rounded-lg shadow">
          <div class="flex items-center justify-between mb-2 p-2 bg-orange-100 rounded-lg">
            <h2 class="text-xl font-semibold">Todo</h2>
            <!-- buttons section -->
            <div class="flex items-center justify-end space-x-2 flex-wrap text-gray-600">
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
              <!-- Tags Section -->
              <div class="flex flex-wrap gap-1 m-2">
                <span
                  class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                  v-for="(tag, index) in task.tags"
                  :key="index"
                >
                  {{ tag.tag_name }}
                </span>
              </div>
              <div class="flex flex-wrap items-center justify-between mb-2">
                <!-- Assigned Users Section -->
                <div class="flex items-center space-x-2">
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
                        class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100"
                      >
                        User 1
                      </div>
                    </div>
                    <!-- Repeat for other users -->
                  </div>
                  <div
                    class="flex items-center justify-center w-10 h-10 text-green-800 bg-green-100 rounded-full cursor-pointer"
                  >
                    +
                  </div>
                </div>

                <!-- Task Actions Section -->
                <div class="flex space-x-4">
                  <button @click="togglePriority" class="flex items-center">
                    <font-awesome-icon :icon="['fas', 'flag']" class="text-gray-700" />
                  </button>

                  <button @click="assignUser" class="flex items-center">
                    <font-awesome-icon :icon="['fas', 'calendar']" class="text-gray-700" />
                  </button>

                  <button @click="startTimer" class="flex items-center">
                    <font-awesome-icon :icon="['fas', 'stopwatch']" class="text-gray-700" />
                  </button>

                  <button @click="toggleStatus" class="flex items-center">
                    <font-awesome-icon :icon="['fas', 'check']" class="text-gray-700" />
                  </button>
                </div>
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
<style scoped>
progress {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
}

progress::-webkit-progress-bar {
  @apply bg-gray-200 rounded;
}

progress::-webkit-progress-value {
  @apply bg-gray-500 rounded;
}

progress::-moz-progress-bar {
  @apply bg-blue-500 rounded;
}
</style>
