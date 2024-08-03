<template>
  <MainLayout>
    <div class="mx-auto p-4">
      <div
        :class="{ 'skeleton-loader bg-gray-200 animate-pulse': generalStore.isLoading }"
        class="bg-white shadow-md rounded-lg p-6"
      >
        <h2 class="text-2xl mb-5 font-semibold">Project Information</h2>
        <form
          @submit.prevent="generalStore.makeRequest('api/project/save', data, 'POST', '/projects')"
          class="grid grid-cols-2 gap-4"
        >
          <div>
            <h3 class="text-l font-semibold">Project Name</h3>
            <input
              required
              v-model="data.value.project_name"
              class="border w-1/2 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <h3 class="text-l font-semibold">Project Details</h3>
            <textarea
              required
              v-model="data.value.project_description"
              class="border w-1/2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="2"
            ></textarea>
          </div>
          <div>
            <h3 class="text-l font-semibold">Department ID</h3>
            <select
              required
              v-model="data.value.department_id"
              name=""
              id=""
              class="border w-1/2 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            >
              <option
                v-for="(department, key) in generalStore.data.departments"
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
                required
                type="number"
                v-model="data.value.project_budget"
                class="border-b w-60 border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
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
              required
              v-model="data.value.project_start_at"
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              type="date"
            />
          </div>
          <div>
            <h3 class="text-l font-semibold">End Date</h3>
            <input
              required
              v-model="data.value.project_end_at"
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              type="date"
            />
            <p class="text-gray-600"></p>
          </div>
          <div>
            <h3 class="text-l font-semibold">Priority</h3>
            <select
              required
              v-model="data.value.project_priority"
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              name="status"
            >
              <option :value="7">High</option>
              <option :value="8">Medium</option>
              <option :value="9">Low</option>
            </select>
          </div>
          <div>
            <h3 class="text-l font-semibold">Status</h3>
            <select
              required
              v-model="data.value.status"
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              name="status"
            >
              <option :value="1">Active</option>
              <option :value="0">Inactive</option>
            </select>
          </div>
          <div>
            <h3 class="text-l font-semibold">Project Stage</h3>
            <select
              required
              v-model="data.value.project_stage"
              class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              name="status"
            >
              <option v-for="(stage, key) in generalStore.data.stages" :key="key" :value="stage.id">
                {{ stage.category_name }}
              </option>
            </select>
          </div>
          <div>
            <h3 class="text-l font-semibold">Status</h3>
            <!-- Assigned Users Section -->
            <div class="mt-4 w-60">
              <h2 class="text-lg font-semibold mb-2">Assigned Users</h2>

              <div class="border rounded bg-gray-100 rounded-xl p-4">
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
            </div>
          </div>
          <!-- Actions Section -->
          <div class="float-right">
            <Button
              @click="generalStore.goBack()"
              type="button"
              class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-3 mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Cancel
            </Button>
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { useGeneralStore } from '@/stores/general'
import { ref, onMounted } from 'vue'
import { redirectBack } from '@/mixins/helper.js'
import axios from '../../../../plugins/axios'

const generalStore = useGeneralStore()
const data = ref({
  value: {
    project_name: '',
    department_id: '',
    project_description: '',
    stage: '',
    users: '',
    project_start_at: '',
    project_end_at: '',
    status: ''
  }
})
onMounted(async () => {
  try {
    generalStore.makeRequest('api/projects/create')
  } catch (error) {
    console.log(error)
  }
})
</script>
