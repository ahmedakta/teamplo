<template>
  <!-- Share Social Media Modal -->
  <div
    ref="modal"
    v-if="generalStore.currentModal === 'shareModal'"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white relative rounded-lg p-6 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">Share this Blog</h2>
      <button
        @click="generalStore.closeModal()"
        class="text-gray-600 hover:text-gray-900 absolute top-0 right-0 p-2"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div class="flex justify-between mb-5">
        <font-awesome-icon
          class="text-[#245567] text-3xl py-6 px-6 bg-[#a1e1f8] rounded-3xl"
          :icon="['fab', 'x-twitter']"
        />
        <font-awesome-icon
          class="text-blue-600 text-3xl py-6 px-6 bg-[#a1e1f8] rounded-3xl"
          :icon="['fab', 'facebook-f']"
        />
        <font-awesome-icon
          class="text-pink-600 text-3xl py-6 px-6 bg-[#fdb4cc] rounded-3xl"
          :icon="['fab', 'instagram']"
        />
        <font-awesome-icon
          class="text-blue-700 text-3xl py-6 px-6 bg-[#a1e1f8] rounded-3xl"
          :icon="['fab', 'linkedin']"
        />
      </div>
      <h1 class="font-bold text-xl">Page Link</h1>
      <div class="flex items-center justify-between p-4 rounded mb-4">
        <span id="blogLink">https://example.com/blog-post</span>
        <button
          id="copyButton"
          class="text-gray-600 ml-2 focus:outline-none"
          onclick="copyToClipboard()"
        >
          <font-awesome-icon class="text-xl rounded-3xl" :icon="['fa-regular', 'copy']" />
        </button>
      </div>
    </div>
  </div>
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
          <label class="block text-sm font-medium text-gray-700">Project Budget</label>
          <div class="flex items-center space-x-2">
            <input
              @change="projectStore.getProjects(generalStore.filterParams)"
              class="border-b w-40 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              type="number"
              v-model="generalStore.filterParams.project_budget"
            />
            <select
              @change="projectStore.getProjects(generalStore.filterParams)"
              class="border-b border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
              v-model="generalStore.filterParams.project_currency"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <!-- Add other currency options as needed -->
            </select>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Department</label>
          <select
            @change="projectStore.getProjects(generalStore.filterParams)"
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
            @change="projectStore.getProjects(generalStore.filterParams)"
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
            @change="projectStore.getProjects(generalStore.filterParams)"
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            name="status"
            v-model="generalStore.filterParams.project_priority"
          >
            <option
              class="bg-white text-black rounded-md"
              v-for="(priority, index) in generalStore.data.filter_form.priorities"
              :key="index"
              :value="index"
            >
              {{ priority }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Start At</label>
          <input
            @change="projectStore.getProjects(generalStore.filterParams)"
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            type="date"
            v-model="generalStore.filterParams.project_start_at"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">End At</label>
          <input
            @change="projectStore.getProjects(generalStore.filterParams)"
            class="border-b w-60 border-gray-300 rounded-md py-2 pl-3 pr-4 focus:outline-none focus:border-blue-500"
            type="date"
            v-model="generalStore.filterParams.project_end_at"
          />
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
          v-if="Object.keys(generalStore.filterParams).length"
          @click="
            generalStore.makeRequest('/api/projects').then(() => {
              generalStore.setDataTable()
              generalStore.filterParams = {}
              router.push({ query: {} })
            })
          "
          class="mt-4 inline-flex items-center px-4 py-2 text-black border border-transparent rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <font-awesome-icon :icon="['fas', 'rotate-left']" />
        </button>
      </div>
    </div>
  </div>
  <!-- EmailSuccessModal Modal -->
  <transition name="fade">
    <div
      v-if="generalStore.currentModal === 'EmailSuccessModal'"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        <!-- Modal header -->
        <div class="text-right p-4 border-b">
          <button @click="generalStore.closeModal()" class="text-gray-600 hover:text-gray-900">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 text-black">
          <!-- Chat content -->
          <div class="h-64 items-center text-center">
            <img src="../../assets/success-email.svg" class="mx-auto hidden lg:block" />
            <h4 class="text-xl font-semibold">
              Thank you for reaching out!. We'll get back to you shortly.
            </h4>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="border-t h-20 items-center text-center mt-10 w-full">
          <RouterLink
            class="bg-black text-white rounded-lg py-5 px-5 w-full"
            :to="{
              name: 'frontend.index'
            }"
            >Back To Home</RouterLink
          >
        </div>
      </div>
    </div>
  </transition>
  <!-- Chat modal -->
  <transition name="fade">
    <div
      v-if="generalStore.currentModal === 'aiChatBoxModal'"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        <!-- Modal header -->
        <div class="flex justify-between items-center p-4 border-b">
          <h3 class="text-lg font-semibold">AI Chat Assistant</h3>
          <button @click="generalStore.closeModal()" class="text-gray-600 hover:text-gray-900">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4">
          <!-- Chat content -->
          <div class="h-64 overflow-y-auto">
            <p class="text-gray-600">Chat with our AI assistant!</p>
            <!-- Add your chat content here -->
          </div>
        </div>
        <!-- Modal footer -->
        <div class="p-4 border-t">
          <input
            type="text"
            placeholder="Type your message..."
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  </transition>
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
import { RouterLink } from 'vue-router'
const projectStore = useProjectStore()
import { useRouter } from 'vue-router'
const router = useRouter()
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
