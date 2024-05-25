<script setup>
import { ref, onMounted } from 'vue'
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { useGeneralStore } from '@/stores/general'
import Chart from '@/components/Backend/Chart.vue'
const generalStore = useGeneralStore()
const errors = ref()

onMounted(() => {
  try {
    generalStore.getData('/api/dashboard')
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
    <div class="container w-full h-[25rem] max-h-[50rem] flex flex-wrap mx-auto justify-between">
      <!-- KPI cards -->
      <div class="w-full flex mx-auto mb-5">
        <div class="bg-white rounded-lg shadow-md p-6 w-72 m-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">Revenue</h3>
            <span class="text-gray-500 text-sm">May 2024</span>
          </div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-700 text-xl font-semibold">$1,200,000</span>
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
              +15%
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 text-sm">Previous Month:</span>
            <span class="text-gray-700 text-sm">$1,043,000</span>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 w-72 m-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">Customer Satisfaction</h3>
            <span class="text-gray-500 text-sm">May 2024</span>
          </div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-700 text-xl font-semibold">4.7</span>
            <span class="text-gray-700 text-sm">NPS Score</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 text-sm">Last Month:</span>
            <span class="text-gray-700 text-sm">4.5</span>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 w-72 m-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">Employee Turnover</h3>
            <span class="text-gray-500 text-sm">May 2024</span>
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
        <div class="bg-white rounded-lg shadow-md p-6 w-72 m-1">
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
      <!-- company updates section -->
      <div class="bg-white md:w-1/2 rounded-xl w-full">
        <!-- header -->
        <div class="flex justify-between">
          <div>
            <h1 class="font-bold text-xl text-black p-5">Departments Progress overview</h1>
          </div>
          <div>
            <select name="" id="" class="bg-gray-200 m-5 py-1 px-2 rounded-xl text-black">
              <option value="">Nisan</option>
              <option value="">Augustos</option>
              <option value="">Ekim</option>
              <option value="">Aralik</option>
            </select>
          </div>
        </div>
        <!-- company updates -->
        <!-- <VDatePicker
          v-model="selectedDate"
          borderless
          :initial-page="{ month: 4, year: 2019 }"
          :color="selectedColor"
          :attributes="attrs"
          expanded
          /> -->
        <div v-if="generalStore.data">
          <Chart :storeData="generalStore.data" />
        </div>
        <!-- is-dark="system" -->
      </div>
      <!-- recent mountained tasks section -->
      <div class="bg-white w-full md:w-1/2 rounded-xl">
        <!-- header of div -->
        <div class="flex justify-between">
          <div>
            <h1 class="font-bold text-xl text-black p-5">Tasks by department</h1>
          </div>
          <div>
            <select name="" id="" class="bg-gray-200 m-5 py-1 px-2 rounded-xl text-black">
              <option value="">IT</option>
              <option value="">Marketing</option>
              <option value="">Medium</option>
              <option value="">Low</option>
            </select>
          </div>
        </div>
        <!-- tasks -->
        <div class="bg-white w-full flex flex-col mx-auto">
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img src="../../assets/icons/task-todo.png" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>Todo (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img
              src="../../assets/icons/task-inProgress.png"
              alt=""
              class="rounded-xl w-[4rem] px-5"
            />
            <p>In Progress (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img src="../../assets/icons/task-done.png" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>Done (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl text-black">
            <img
              src="../../assets/icons/task-unassigned.png"
              alt=""
              class="rounded-xl w-[4rem] px-5"
            />
            <p>Unassigned (18)</p>
          </div>
        </div>
      </div>

      <!-- projects section -->
      <div class="bg-white w-full md:w-full mt-5 p-5 rounded-xl">
        <div class="container text-black">
          <h1 class="font-bold text-xl">Projects Progress</h1>
          <div class="bg-white w-full mx-auto overflow-y-auto h-[20rem]">
            <div
              class="flex justify-between shadow py-3 m-3 rounded-xl text-black px-4"
              v-for="(project, key) in generalStore.data.projects"
              :key="key"
            >
              <div class="w-1/4 flex">
                <img
                  v-for="(user, key) in project.users"
                  :src="'./src/assets/' + user.image"
                  alt=""
                  class="rounded-xl w-4 h-auto"
                />
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
              <div class="w-1/4 text-center">
                <!-- End at : {{project.project_end_at}} -->
                2 Days left
              </div>
              <!-- <div>
              <progress id="file" :value="project.progress" max="100" class=" bg-red-500"> {{project.progress}} </progress>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
