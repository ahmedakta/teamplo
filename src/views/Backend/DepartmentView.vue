<template>
  <MainLayout>
    <div>
      <div class="flex justify-center space-x-2 mb-8">
        <button
          class="border-[1px] border-gray-500 px-10 py-2 rounded-lg text-black"
          :class="{ 'bg-white': generalStore.currentTab === 'p' }"
          @click="generalStore.setCurrentTab('p')"
        >
          <!-- :class="tabClass(tab)"
          @click="selectedTab = tab" -->
          Projects
        </button>
        <button
          class="border-[1px] border-gray-500 px-10 py-2 rounded-lg text-black"
          :class="{ 'bg-white': generalStore.currentTab === 'k' }"
          @click="generalStore.setCurrentTab('k')"
        >
          KPI
        </button>
        <button
          class="border-[1px] border-gray-500 px-10 py-2 rounded-lg text-black"
          :class="{ 'bg-white': generalStore.currentTab === 'e' }"
          @click="generalStore.setCurrentTab('e')"
        >
          Employee's
        </button>
      </div>
      <!-- PROJECTS -->
      <div v-if="generalStore.currentTab == 'p'">
        <Projects :projects="department.projects" />
      </div>
      <!-- KPI -->
      <div v-if="generalStore.currentTab == 'k'">
        <Kpi />
      </div>
      <!-- Emplyees -->
      <div v-if="generalStore.currentTab == 'e'">
        <Employees />
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Projects from '@/components/Backend/Departments/Department/Projects.vue'
import Kpi from '@/components/Backend/Departments/Department/Kpi.vue'
import Employees from '@/components/Backend/Departments/Department/Employees.vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
const route = useRoute()
const department = ref({})
const tasks = ref({})

onMounted(() => {
  try {
    getDepartment()
    // set projects as default tab if there is no tab query in URL (we need to check url first)
    generalStore.currentTab = route.query.tab ? route.query.tab : 'p'
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
