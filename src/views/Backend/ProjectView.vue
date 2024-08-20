<template>
  <MainLayout>
    <div class="mx-auto p-4">
      <div
        :class="{ 'skeleton-loader bg-gray-200 animate-pulse': generalStore.isLoading }"
        class=" p-6 mb-6"
      >
        <!-- Project Title -->
        <div class="flex items-center justify-end mb-4">
          <span
            class="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full"
            >Active</span
          >
        </div>

        <!-- KPI Section -->
        <div class="grid grid-cols-3">
          <!-- Total Tasks -->
          <div class="bg-gray-200 w-3/4 rounded-lg p-4">
            <h3 class="text-sm font-medium text-gray-700">Total Tasks</h3>
            <p class="mt-1 text-2xl font-semibold text-gray-900">{{ data.tasks_count }}</p>
          </div>

          <!-- Completed Tasks -->
          <div class="bg-gray-200 w-3/4 rounded-lg p-4">
            <h3 class="text-sm font-medium text-gray-700">Completed Tasks</h3>
            <p class="mt-1 text-2xl font-semibold text-gray-900">{{data.completed_tasks_count}}</p>
          </div>

          <!-- Assigned Users -->
          <div class="bg-gray-200 w-3/4 rounded-lg p-4">
            <h3 class="text-sm font-medium text-gray-700">Assigned Users</h3>
            <p class="mt-1 text-2xl font-semibold text-gray-900">
              <div class="border bg-gray-100 rounded-xl p-4">
                <!-- Display assigned users -->
                <div class="flex items-center justify-between border-b py-2">
                  <div class="flex items-center space-x-2">
                    <div class="flex -space-x-2">
                      <div class="relative group" data-username="User 1">
                        <img
                          class="w-10 h-10 rounded-full border-2 border-white"
                          src="https://via.placeholder.com/40"
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
                          src="https://via.placeholder.com/40"
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
                          src="https://via.placeholder.com/40"
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
                      +16
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div
        :class="{ 'skeleton-loader bg-gray-200 animate-pulse': generalStore.isLoading }"
        class="bg-white shadow-md rounded-lg p-6"
      >
        <h2 class="text-2xl mb-5 font-semibold">Project Information</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h2 class="text-md font-semibold">Project Name</h2>
            <input
            class="border-b w-full border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            v-model="data.project_name"
              cols="100"
              rows="3"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            />
          </div>
          <div>
            <h2 class="text-md font-semibold">Project Description</h2>
            <textarea
            class="border-b w-full border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            v-model="data.project_description"
              cols="100"
              rows="3"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            ></textarea>
          </div>
          <div>
            <h3 class="text-l font-semibold">Department ID</h3>
            <select
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
              v-if="generalStore.data.form"
              required
              v-model="data.department_id"
              class="border-b w-full border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            >
              <option
                v-for="(department, key) in generalStore.data.form.departments"
                :key="key"
                :value="department.id"
              >
                {{ department.department_name }}
              </option>
            </select>
          </div>
          <div>
            <h3 class="text-l font-semibold">Budget</h3>
            <div class="relative">
              <input
                type="number"
                class="border-b w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
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
              class="border-b w-full border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              type="date"
              v-model="data.project_start_at"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            />
          </div>
          <div>
            <h3 class="text-l font-semibold">End Date</h3>
            <input
              class="border-b w-full border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              type="date"
              v-model="data.project_end_at"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            />
            <p class="text-gray-600"></p>
          </div>
          <div>
            <h3 class="text-l font-semibold">Priority</h3>
            <select
              class="border-b w-full border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              name="status"
              v-model="data.project_priority"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            >
              <option :value="7">High</option>
              <option :value="8">Medium</option>
              <option :value="9">Low</option>
            </select>
          </div>
          <div>
            <h3 class="text-l font-semibold">Status</h3>
            <select
              class="border-b w-full border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              name="status"
              v-model="data.status"
              @change="generalStore.makeRequest('api/project/update', data, 'PUT')"
            >
              <option :value="1">Active</option>
              <option :value="0">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <!-- tabs -->
      <div
        class="bg-white mt-10 shadow-md rounded-lg p-6 mb-6"
        :class="{ 'skeleton-loader bg-gray-200 animate-pulse': generalStore.isLoading }"
      >
        <!-- buttons -->
        <div class="border-b mb-4">
          <button
            :class="{ 'border-b-2 border-blue-500': generalStore.currentTab === 'comments' }"
            class="p-2 focus:outline-none"
            @click="generalStore.currentTab = 'comments'"
          >
            Comments
          </button>
          <button
            :class="{ 'border-b-2 border-blue-500': generalStore.currentTab === 'files' }"
            class="p-2 focus:outline-none"
            @click="generalStore.currentTab = 'files'"
          >
            Files
          </button>
          <button
            :class="{ 'border-b-2 border-blue-500': generalStore.currentTab === 'activity' }"
            class="p-2 focus:outline-none"
            @click="generalStore.currentTab = 'activity'"
          >
            Activities
          </button>
        </div>
        <!-- tabs -->
        <div>
          <div v-if="generalStore.currentTab === 'comments'">
            <!-- Comments content goes here -->
            <div v-if="data.comments && data.comments.length" class="overflow-y-auto h-60">
              <div
                v-for="(comment, key) in data.comments"
                :key="key"
                class="relative mb-4 p-4 bg-white group"
              >
                <div class="flex items-start space-x-4">
                  <img
                    src="@/assets/default_profile_image.png"
                    alt="Profile Image"
                    class="w-10 h-10 rounded-full"
                  />
                  <div class="flex-1">
                    <div class="flex justify-between items-center">
                      <h4 class="font-semibold text-gray-800">{{ comment.user.name }}</h4>
                      <span class="text-sm text-gray-500">{{ comment.created_at }}</span>
                    </div>
                    <p class="mt-2 text-gray-600" v-html="comment.comment_desc"></p>
                    <!-- Display reactions -->
                    <div class="mt-2 flex space-x-2">
                      <div class="flex items-center space-x-1">
                        <span>😂 (3)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Options on Hover -->
                <div
                  class="absolute top-0 mx-auto right-0 hidden group-hover:flex flex-row bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  <button
                    class="text-sm hover:bg-gray-200 py-2 px-2 text-gray-700 hover:text-gray-900"
                  >
                    React
                  </button>
                  <button
                    class="text-sm hover:bg-gray-200 py-2 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <font-awesome-icon :icon="['fa', 'face-grin-tears']" />
                  </button>
                  <button
                    class="text-sm hover:bg-gray-200 py-2 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <font-awesome-icon :icon="['fa', 'check']" />
                  </button>
                  <button
                    class="text-sm hover:bg-gray-200 py-2 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <font-awesome-icon :icon="['fa', 'pen-to-square']" />
                  </button>
                  <button
                    class="text-sm hover:bg-gray-200 py-2 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <font-awesome-icon :icon="['fa', 'reply']" />
                  </button>
                  <button
                    class="text-sm hover:bg-gray-200 py-2 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <font-awesome-icon :icon="['fa', 'trash']" />
                  </button>
                  <button
                    class="text-sm hover:bg-gray-200 py-2 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <font-awesome-icon :icon="['fa', 'ellipsis-vertical']" />
                  </button>
                </div>

                <!-- Nested Replies -->
                <div v-if="comment.replies" class="mt-4 space-y-4 pl-10">
                  <div
                    v-for="(reply, replyKey) in comment.replies"
                    :key="replyKey"
                    class="flex items-start space-x-4"
                  >
                    <img
                      src="@/assets/default_profile_image.png"
                      alt="Profile Image"
                      class="w-8 h-8 rounded-full"
                    />
                    <div class="flex-1">
                      <div class="flex justify-between items-center">
                        <h5 class="font-semibold text-gray-800">{{ reply.author }}</h5>
                        <span class="text-sm text-gray-500">{{ reply.date }}</span>
                      </div>
                      <p class="mt-1 text-gray-600">{{ reply.reply_desc }}</p>
                      <div class="mt-2 flex space-x-4">
                        <button class="text-sm text-blue-500 hover:underline">Reply</button>
                        <button class="text-sm text-red-500 hover:underline">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else>No Comments</div>
            <Editor v-model="formData.comment_desc" editorStyle="height: 220px">
              <template v-slot:toolbar>
                <span class="ql-formats">
                  <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                  <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                  <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
              </template>
            </Editor>
            <button
              @click="
                generalStore
                  .makeRequest(projectUrl + '/comment/save', formData, 'POST')
                  .then(() => {
                    getProject(null, projectUrl)
                  })
              "
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <font-awesome-icon :icon="['fa', 'paper-plane']" />
            </button>
          </div>
          <div v-if="generalStore.currentTab === 'files'">
            <!-- Files content goes here -->
            <h3 class="text-lg font-semibold mb-2">Files</h3>
            <div  class="space-y-4">
              <div class="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16V4a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2H8l-4 4z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-sm font-semibold text-gray-700">asdasd</h4>
                  <p class="text-sm text-gray-500">12| PDF</p>
                </div>
                <div class="flex-shrink-0">
                  <a class="text-blue-600 hover:text-blue-800">Download</a>
                </div>
              </div>
            </div>
            <p class="text-gray-600">No files available.</p>
          </div>
          <div v-if="generalStore.currentTab === 'activity'">
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
const formData = ref({})
const generalStore = useGeneralStore()
let projectUrl = `/api/project/${route.params.slug}`

onMounted(() => {
  try {
    getProject(null, projectUrl)
    generalStore.currentTab = 'comments';
  } catch (error) {
    console.log(error)
  }
})

const getProject = async (filterParams = null, projectUrl) => {
  generalStore.makeRequest(projectUrl, filterParams).then(() => {
    // custimize values for datatable library
    if (generalStore.data) {
      data.value = generalStore.data.rec
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
</script>
