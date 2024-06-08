<template>
  <MainLayout>
    <div class="mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">{{ data.project_name }}</h1>
      <div
        :class="{ 'skeleton-loader bg-gray-200 animate-pulse': generalStore.isLoading }"
        class="bg-white shadow-md rounded-lg p-6 mb-6"
      >
        <div class="mb-4">
          <h2 class="text-2xl font-semibold">Project Details</h2>
          <textarea
            class="border border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            v-model="data.project_description"
            cols="100"
            rows="3"
            @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
          ></textarea>
        </div>
      </div>
      <div
        :class="{ 'skeleton-loader bg-gray-200 animate-pulse': generalStore.isLoading }"
        class="bg-white shadow-md rounded-lg p-6"
      >
        <h2 class="text-2xl mb-5 font-semibold">Project Information</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-l font-semibold">Department ID</h3>
            <p class="text-gray-600">{{ data.department_id }}</p>
          </div>
          <div>
            <h3 class="text-l font-semibold">Budget</h3>
            <div class="relative">
              <input
                type="number"
                class="border-b w-60 border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
                v-model="data.project_budget"
                @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-500">
                  <font-awesome-icon :icon="['fa', 'dollar-sign']" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-l font-semibold">Start Date</h3>
            <input
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              type="date"
              v-model="data.project_start_at"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            />
          </div>
          <div>
            <h3 class="text-l font-semibold">End Date</h3>
            <input
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              type="date"
              v-model="data.project_end_at"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            />
            <p class="text-gray-600"></p>
          </div>
          <div>
            <h3 class="text-l font-semibold">Priority</h3>
            <select
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              name="status"
              v-model="data.project_priority"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            >
              <option :value="2">High</option>
              <option :value="1">Medium</option>
              <option :value="0">Low</option>
            </select>
          </div>
          <div>
            <h3 class="text-l font-semibold">Status</h3>
            <select
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              name="status"
              v-model="data.status"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            >
              <option :value="1">Active</option>
              <option :value="0">Inactive</option>
            </select>
          </div>
          <div>
            <h3 class="text-l font-semibold">Status</h3>
            <!-- Assigned Users Section -->
            <div class="mt-4">
              <h2 class="text-lg font-semibold mb-2">Assigned Users</h2>
              <div class="border rounded bg-gray-100 p-4">
                <!-- Display assigned users -->
                <div class="flex items-center justify-between border-b py-2">
                  <span>asdasd</span>
                  <button
                    @click="removeUser(index)"
                    class="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- tabs -->
      <div class="bg-white mt-10 shadow-md rounded-lg p-6 mb-6">
        <div class="border-b mb-4">
          <button
            :class="{ 'border-b-2 border-blue-500': activeTab === 'comments' }"
            class="p-2 focus:outline-none"
            @click="activeTab = 'comments'"
          >
            Comments
          </button>
          <button
            :class="{ 'border-b-2 border-blue-500': activeTab === 'files' }"
            class="p-2 focus:outline-none"
            @click="activeTab = 'files'"
          >
            Files
          </button>
          <button
            :class="{ 'border-b-2 border-blue-500': activeTab === 'activity' }"
            class="p-2 focus:outline-none"
            @click="activeTab = 'activity'"
          >
            Activities
          </button>
        </div>
        <div>
          <div v-if="activeTab === 'comments'">
            <!-- Comments content goes here -->
            <div class="flex w-40 mb-10">
              <a href="#"><img src="@/assets/default_profile_image.png" alt="" width="30rem" /></a>
              <p class="mx-auto flex">Test comment</p>
            </div>
            <Editor v-model="comment" editorStyle="height: 220px" />
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <font-awesome-icon :icon="['fa', 'paper-plane']" />
            </button>
          </div>
          <div v-if="activeTab === 'files'">
            <!-- Files content goes here -->
            <h3 class="text-lg font-semibold mb-2">Files</h3>
            <p class="text-gray-600">No files available.</p>
          </div>
          <div v-if="activeTab === 'activity'">
            <!-- Files content goes here -->
            <h3 class="text-lg font-semibold mb-2">Last Activity</h3>
            <p class="text-gray-600">No files available.</p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import Editor from 'primevue/editor'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGeneralStore } from '@/stores/general'

const route = useRoute()
const data = ref([])
const generalStore = useGeneralStore()
let activeTab = ref('comments')
onMounted(() => {
  try {
    getProject()
  } catch (error) {
    console.log(error)
  }
})

const getProject = async (filterParams = null) => {
  let url = '/api/project/' + route.params.id
  generalStore.getData(url, filterParams).then(() => {
    // custimize values for datatable library
    if (generalStore.data) {
      data.value = generalStore.data
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
</script>
