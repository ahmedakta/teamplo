<template>
  <MainLayout>
    <div class="mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Departments</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Department
          v-for="(department, key) in generalStore.data.departments"
          :key="key"
          :title="department.department_name"
          :description="department.department_desc"
          :slug="department.slug"
          :projects_count="department.projects_count"
          :users_count="department.users_count"
        />
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useTaskStore } from '@/stores/task'
import { useGeneralStore } from '@/stores/general'
import Department from '@/components/Backend/Departments/Department.vue'

const generalStore = useGeneralStore()
const taskStore = useTaskStore()
const errors = ref()
onMounted(() => {
  generalStore.makeRequest('api/departments')
})
const deleteTask = async task => {
  errors.value = null

  try {
    await taskStore.getTokens()
    await taskStore.deleteTask(task)
    // , { withCredentials: true }
  } catch (error) {
    errors.value = error.response.data.errors
  }
}
const task = ref('')
</script>
