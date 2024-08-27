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
const attributes = ref([
  {
    // Boolean
    dot: true,
    dates: [new Date(2024, 0, 1), new Date(2024, 0, 10), new Date(2024, 0, 22)]
  },
  {
    // String
    dot: 'red',
    dates: [new Date(2024, 0, 4), new Date(2024, 0, 10), new Date(2024, 0, 15)]
  },
  {
    // Object
    dot: {
      style: {
        backgroundColor: 'brown'
      }
    },
    dates: [new Date(2024, 0, 12), new Date(2024, 0, 26), new Date(2024, 0, 15)]
  }
])
</script>

<template>
  <MainLayout>
    <div class="container mx-auto">
      <!-- ___________ Wrapper for KPI cards ____________ -->
      <div
        class="flex bg-white rounded-xl shadow-md flex-wrap justify-center md:justify-between mb-5"
        v-if="generalStore.data.kpi"
      >
        <!-- KPI Card 1 -->
        <div class="p-6 w-full sm:w-1/3">
          <div class="flex items-center mt-8 justify-between mb-4">
            <span class="text-gray-700 text-lg font-semibold">
              <img src="@/assets/icons/backend/dashboard/kpi/users.svg" class="pr-2" alt="" />
            </span>
            <span class="text-gray-700 text-lg font-semibold">Active Users</span>
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
              +{{ generalStore.data.kpi.company_users }}
            </span>
          </div>
        </div>

        <!-- KPI Card 2 -->
        <div class="p-6 w-full sm:w-1/3">
          <div class="flex items-center mt-10 justify-between mb-4">
            <span class="text-gray-700 text-lg font-semibold">
              <img src="@/assets/icons/backend/dashboard/kpi/projects.svg" class="pr-2" alt="" />
            </span>
            <span class="text-gray-700 text-lg font-semibold">Projects</span>
            <span class="text-green-500 text-sm flex items-center">
              {{ generalStore.data.kpi.company_projects }}
            </span>
          </div>
        </div>

        <!-- KPI Card 3 -->
        <div class="p-6 w-full sm:w-1/3">
          <div class="flex items-center mt-10 justify-between mb-4">
            <span class="text-gray-700 text-lg font-semibold">
              <img src="@/assets/icons/backend/dashboard/kpi/departments.svg" class="pr-2" alt="" />
            </span>
            <span class="text-gray-700 text-lg font-semibold">Departments</span>
            <span class="text-green-500 text-sm flex items-center">
              {{ generalStore.data.kpi.company_departments }}
            </span>
          </div>
        </div>
      </div>
      <!-- ___________ End Of Wrapper for KPI cards ____________ -->

      <!-- ______________  Events And Tasks By Project _____________  -->
      <div class="flex flex-wrap justify-between mb-5">
        <!-- Departments Progress Overview -->
        <div class="bg-white w-full shadow-md md:w-[calc(50%-1rem)] rounded-xl mb-5 md:mb-0">
          <div class="flex justify-between">
            <h1 class="font-bold text-xl text-black p-5">Events & Meetings</h1>
          </div>
          <div class="flex justify-between">
            <div class="p-5 w-full h-3/4 text-black overflow-y-auto">
              <ul>
                <li class="p-3 bg-green-100 w-full rounded-xl">Meeting 10:00 - 10:30 | IT</li>
                <li class="p-3 mt-2 bg-red-100 w-full rounded-xl">Meeting 10:00 - 10:30 | IT</li>
                <li class="p-3 mt-2 bg-red-100 w-full rounded-xl">Meeting 10:00 - 10:30 | IT</li>
                <li class="p-3 mt-2 bg-red-100 w-full rounded-xl">Meeting 10:00 - 10:30 | IT</li>
              </ul>
            </div>
            <VCalendar
              :initial-page="{ month: 8, year: 2024 }"
              :attributes="attributes"
              class="border-1 border-red-500"
            />
          </div>
        </div>
        <!-- Doutnut Chart -->
        <div class="bg-white w-full shadow-md md:w-[calc(50%-1rem)] rounded-xl mb-5 md:mb-0">
          <div class="flex justify-between">
            <h1 class="font-bold text-xl text-black p-5">Projects Tasks</h1>
          </div>
          <div class="bg-white w-full flex flex-col rounded-xl mx-auto">
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
      </div>

      <!-- ______________  End Of Events And Tasks By Project _____________  -->

      <!-- ______________ Charts ____________ -->
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
    </div>
  </MainLayout>
</template>
