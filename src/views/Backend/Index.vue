<script setup>
import { ref, onMounted } from 'vue'
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { useGeneralStore } from '@/stores/general'
import PieChart from '@/components/Backend/Charts/PieChart.vue'
import LineChart from '@/components/Backend/Charts/LineChart.vue'
import DoughnutChart from '@/components/Backend/Charts/DoughnutChart.vue'
const generalStore = useGeneralStore()

onMounted(() => {
  try {
    generalStore.makeRequest('/api/dashboard')
  } catch (error) {
    console.log(error)
  }
})

// example attrs to the vcalendar
const attrs = ref([
  {
    key: 'test',
    highlight: true,
    dates: { start: new Date(2019, 3, 15), end: new Date(2019, 3, 19) }
  }
])
const task = ref('')
</script>

<template>
  <!-- <div class="text-black bg-red-500 w-full h-[5rem]" v-if="generalStore.data">
    <h1>Data Debugger</h1>
    {{ generalStore.data }}
  </div> -->
  <MainLayout>
    <div class="container mx-auto">
      <!-- Wrapper for KPI cards -->
      <div class="flex flex-wrap justify-center md:justify-between mb-5">
        <!-- KPI Card 1 -->
        <div class="bg-white rounded-lg shadow-md p-6 w-full sm:w-[17rem] m-1">
          <div class="flex items-center mt-10 justify-between mb-4">
            <span class="text-gray-700 text-lg font-semibold">Active Employees</span>
            <span class="text-green-500 text-sm flex items-center">
              <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 3.333a6.667 6.667 0 100 13.334A6.667 6.667 0 0010 3.333zm0-1.667a8.333 8.333 0 110 16.666A8.333 8.333 0 0110 1.667z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M10 6.667a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm0-1.666a5 5 0 110 10A5 5 0 0110 5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              +15
            </span>
          </div>
        </div>

        <!-- KPI Card 2 -->
        <div class="bg-white rounded-lg shadow-md p-6 w-full sm:w-[17rem] m-1">
          <div class="flex items-center mt-10 justify-between mb-4">
            <span class="text-gray-700 text-lg font-semibold">Project Count</span>
            <span class="text-green-500 text-sm flex items-center"> +20 </span>
          </div>
        </div>

        <!-- KPI Card 3 -->
        <div class="bg-white rounded-lg shadow-md p-6 w-full sm:w-[17rem] m-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-800">Projects Count</h3>
            <span class="text-gray-500 text-sm">40</span>
          </div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-700 text-xl font-semibold">8%</span>
            <span class="text-gray-700 text-sm">Turnover Rate</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 text-sm">Last Quarter:</span>
            <span class="text-gray-700 text-sm">7%</span>
          </div>
        </div>

        <!-- KPI Card 4 -->
        <div class="bg-white rounded-lg shadow-md p-6 w-full sm:w-[17rem] m-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">Inventory Turnover</h3>
            <span class="text-gray-500 text-sm">May 2024</span>
          </div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-700 text-xl font-semibold">6x</span>
            <span class="text-gray-700 text-sm">Turnover Ratio</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 text-sm">Last Year:</span>
            <span class="text-gray-700 text-sm">5x</span>
          </div>
        </div>
      </div>

      <!-- Tasks by Project -->
      <div class="bg-white shadow-md w-full rounded-xl mb-5">
        <div class="flex justify-between">
          <h1 class="font-bold text-xl text-black p-5">Tasks by Project</h1>
          <div>
            <select name="" id="" class="bg-gray-200 m-5 py-1 px-2 rounded-xl text-black">
              <option value="">IT</option>
              <option value="">Marketing</option>
              <option value="">Medium</option>
              <option value="">Low</option>
            </select>
            <select name="" id="" class="bg-gray-200 m-5 py-1 px-2 rounded-xl text-black">
              <option value="">Project 1</option>
              <option value="">Project 2</option>
            </select>
          </div>
        </div>
        <div class="bg-white w-full flex flex-col mx-auto">
          <!-- Task cards -->
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img src="@/assets/icons/todo.svg" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>Todo (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img src="@/assets/icons/in-progress.svg" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>In Progress (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img src="@/assets/icons/done.svg" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>Done (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img src="@/assets/icons/unassigned.svg" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>Unassigned (18)</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-between">
        <!-- Departments Progress Overview -->
        <div class="bg-white w-full shadow-md md:w-[calc(50%-1rem)] rounded-xl mb-5 md:mb-0">
          <div class="flex justify-between">
            <h1 class="font-bold text-xl text-black p-5">Departments Progress Overview</h1>
            <select name="" id="" class="bg-gray-200 m-5 py-1 px-2 rounded-xl text-black">
              <option value="">Nisan</option>
              <option value="">Augustos</option>
              <option value="">Ekim</option>
              <option value="">Aralik</option>
            </select>
          </div>
          <PieChart :storeData="generalStore.data" />
        </div>
        <!-- Doutnut Chart -->
        <div class="bg-white w-full shadow-md md:w-[calc(50%-1rem)] rounded-xl mb-5 md:mb-0">
          <div class="flex justify-between">
            <h1 class="font-bold text-xl text-black p-5">Employees at company</h1>
          </div>
          <DoughnutChart :storeData="generalStore.data" />
        </div>
      </div>

      <!-- Line Chart -->
      <div class="bg-white w-full rounded-xl p-5 mt-5">
        <LineChart :storeData="generalStore.data" />
      </div>

      <!-- Projects Progress -->
      <!-- <div class="bg-white w-full rounded-xl p-5 mt-5">
        <h1 class="font-bold text-xl">Projects Progress</h1>
        <div class="bg-white w-full mx-auto overflow-y-auto h-[20rem]">
          <div
            class="flex justify-between shadow py-3 m-3 rounded-xl text-black px-4"
            v-for="(project, key) in generalStore.data.projects"
            :key="key"
          >
            <div class="flex items-center space-x-2">
              <div class="flex -space-x-2">
                <div
                  v-for="(user, key) in project.users"
                  :key="key"
                  class="relative group"
                  :data-username="user.name"
                >
                  <img
                    :src="'./src/assets/' + user.image"
                    class="w-10 h-10 rounded-full border-2 border-white"
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
                    {{ user.name }}
                  </div>
                </div>
                <div class="relative group">
                  <span
                    class="flex items-center justify-center w-10 h-10 text-green-800 bg-green-100 rounded-full"
                    >+</span
                  >
                </div>
              </div>
              <div
                class="flex items-center justify-center w-10 h-10 text-green-800 bg-gray-100 rounded-full"
              >
                +16
              </div>
            </div>
            <div class="w-1/4 text-left text-black">
              {{ project.project_name }}
            </div>
            <div class="w-1/4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-pink-600 h-2.5 rounded-full"
                :style="{ width: project.progress + '%' }"
              ></div>
            </div>
            <div class="w-1/4 text-center">2 Days left</div>
          </div>
        </div>
      </div> -->
    </div>
  </MainLayout>
</template>
