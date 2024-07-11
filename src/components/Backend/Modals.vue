<template>
  <!-- Projects Filter Modal -->
  <div
    ref="modal"
    v-if="generalStore.currentModal === 'filterModal'"
    class="fixed inset-0 flex items-end justify-end z-50 transition-transform duration-300 transform"
    :class="{
      'translate-x-full': generalStore.currentModal !== 'filterModal',
      'translate-x-0': generalStore.currentModal === 'filterModal'
    }"
  >
    <div class="bg-white shadow-xl w-80 h-full p-4">
      <div class="modal-content">
        <h2 class="text-xl font-bold mb-4">Filter Data</h2>

        <!-- Input fields for filtering data -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Start At</label>
          <input
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            type="date"
            v-model="generalStore.filterParams.project_start_at"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">End At</label>
          <input
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            type="date"
            v-model="generalStore.filterParams.project_end_at"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Project Budget</label>
          <input
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            type="number"
            v-model="generalStore.filterParams.project_budget"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Department</label>
          <select
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            name="status"
            v-model="generalStore.filterParams.department_id"
          >
            <option
              v-for="(department, index) in generalStore.data.filter_form.departments"
              :key="index"
              :value="department.id"
            >
              {{ department.department_name }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Stage</label>
          <select
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            name="status"
            v-model="generalStore.filterParams.project_stage"
          >
            <option
              v-for="(stage, index) in generalStore.data.filter_form.stages"
              :key="index"
              :value="index"
            >
              {{ stage }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Priority</label>
          <select
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            name="status"
            v-model="generalStore.filterParams.project_priority"
          >
            <option
              v-for="(priority, index) in generalStore.data.filter_form.priorities"
              :key="index"
              :value="index"
            >
              {{ priority }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Progress</label>
          <input type="range" />
        </div>
        <!-- Assignment Filter -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Assigned To User..</label>
          <div class="flex -space-x-2">
            <div class="relative group">
              <img
                src="@/assets/default_profile_image.png"
                class="w-10 h-10 rounded-full border-2 border-white"
                alt="User 1"
              />
              <div
                class="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl rounded-full opacity-0 group-hover:opacity-100"
              >
                ×
              </div>
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-4 py-1 rounded opacity-0 group-hover:opacity-100"
              >
                Test User
              </div>
            </div>
            <div class="relative group cursor-pointer">
              <span
                class="flex items-center justify-center w-10 h-10 text-green-800 bg-green-100 rounded-full"
                >+</span
              >
            </div>
          </div>
        </div>
        <!-- Add more input fields as needed -->

        <!-- Close button -->
        <button
          @click="generalStore.closeModal()"
          class="mt-4 inline-flex items-center px-4 py-2 text-black border border-transparent rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Close
        </button>
        <button
          @click="
            generalStore.makeRequest('/api/projects', generalStore.filterParams, 'GET').then(() => {
              generalStore.setDataTable()
            })
          "
          class="mt-4 inline-flex items-center px-4 py-2 text-black border border-transparent rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <font-awesome-icon :icon="['fas', 'search']" />
        </button>
        <button
          v-if="Object.keys(generalStore.filterParams).length"
          @click="
            generalStore.makeRequest('/api/projects').then(() => {
              generalStore.setDataTable()
              generalStore.filterParams = {}
            })
          "
          class="mt-4 inline-flex items-center px-4 py-2 text-black border border-transparent rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <font-awesome-icon :icon="['fas', 'rotate-left']" />
        </button>
      </div>
    </div>
  </div>

  <!-- Assign Users Modal -->
  <div
    v-if="generalStore.currentModal === 'assignUserModal'"
    class="fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 transform"
  >
    <div class="bg-white shadow-xl w-80 h-50 p-4">
      <!-- Selected users tag input -->
      <div class="tags-input">
        <div class="tag">
          Ahmet
          <span class="remove-tag" @click="removeUser(index)">x</span>
        </div>
        <input
          type="text"
          v-model="searchQuery"
          @keydown.enter.prevent="addUserByInput"
          placeholder="Add a user"
        />
      </div>
      <!-- {{ projectStore.data.assignmentUsers }} -->
      <ul class="max-h-48 overflow-y-auto">
        <li
          class="px-4 py-2 cursor-pointer hover:bg-gray-100"
          v-for="(user, key) in projectStore.data.assignmentUsers"
          :key="key"
          @click="
            generalStore.makeRequest(
              'api/project/assign-user',
              { user_id: user.id, project_id: projectStore.data.project_id },
              'POST',
              null,
              '/api/projects'
            )
          "
        >
          {{ user.name }}
        </li>
      </ul>
      <!-- Close button -->
      <button
        @click="generalStore.closeModal()"
        class="mt-4 inline-flex items-center px-4 py-2 text-red border border-transparent rounded-md font-semibold hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Close
      </button>
    </div>
  </div>
</template>
<script setup>
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
import { useProjectStore } from '@/stores/project'
const projectStore = useProjectStore()
</script>
<style scoped>
.tags-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 3px;
}

.tag {
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 3px;
  padding: 5px;
  margin: 2px;
}

.remove-tag {
  margin-left: 5px;
  cursor: pointer;
}

.tags-input input {
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
}
</style>
