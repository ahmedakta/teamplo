<template>
  <MainLayout>
    <div>
      <div class="flex justify-center space-x-2 mb-8">
        <button
          :class="[
            'bg-white px-10 py-2 border-black rounded-lg text-black',
            { 'bg-red-500': activeTab == 'PROJECTS' }
          ]"
          @click="activeTab = 'PROJECTS'"
        >
          <!-- :class="tabClass(tab)"
          @click="selectedTab = tab" -->
          Projects
        </button>
        <button
          class="border-[1px] border-gray-500 px-10 py-2 rounded-lg text-black"
          @click="activeTab = 'KPI'"
        >
          KPI
        </button>
        <button
          class="border-[1px] border-gray-500 px-10 py-2 rounded-lg text-black"
          @click="activeTab = 'EMPLOYEES'"
        >
          Employee's
        </button>
        {{ activeTab }}
      </div>
      <!-- <div v-if="selectedTab === 'KPI'">
        <KpiSection />
      </div>
      <div v-else-if="selectedTab === 'TASKS'">
        <TasksSection
          :tasks="tasks"
          :inProgressTasks="inProgressTasks"
          :cancelledTasks="cancelledTasks"
        />
      </div>
      <div v-else-if="selectedTab === 'USERS'">
        <UsersSection :users="users" />
      </div> -->
      <Board v-if="activeTab == 'PROJECTS'" :department="department" :tasks="tasks" />
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Board from '@/components/Backend/Departments/Board.vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
const route = useRoute()
const department = ref({})
const tasks = ref({})
let activeTab = ref('Board')

onMounted(() => {
  try {
    getDepartment()
  } catch (error) {
    console.log(error)
  }
})

const getDepartment = async () => {
  let url = 'api/department/' + route.params.slug
  generalStore.makeRequest(url).then(() => {
    // custimize values for datatable library
    if (generalStore.data) {
      department.value = generalStore.data.department
      tasks.value = generalStore.data.tasks
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
</script>
