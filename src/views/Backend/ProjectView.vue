<template>
      <MainLayout>
        <div class="mx-auto p-4">
            <h1 class="text-3xl font-bold mb-4">{{ data.project_name }}</h1>
            <div class="bg-white shadow-md rounded-lg p-6 mb-6">
                <div class="mb-4">
                    <h2 class="text-2xl font-semibold">Project Details</h2>
                    <p class="text-gray-700 mt-2">{{ data.project_description }}</p>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg p-6">
                <h2 class="text-2xl mb-5 font-semibold">Project Information</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-l font-semibold">Department ID</h3>
                        <p class="text-gray-600">{{ data.department_id }}</p>
                    </div>
                    <div>
                        <h3 class="text-l font-semibold">Budget</h3>
                        <p class="text-gray-600">${{ data.project_budget }}</p>
                    </div>
                    <div>
                        <h3 class="text-l font-semibold">Start Date</h3>
                        <p class="text-gray-600">{{ (data.project_start_at) }}</p>
                    </div>
                    <div>
                        <h3 class="text-l font-semibold">End Date</h3>
                        <p class="text-gray-600">{{ (data.project_end_at) }}</p>
                    </div>
                    <div>
                        <h3 class="text-l font-semibold">Priority</h3>
                        <p class="text-gray-600">{{ data.project_priority }}</p>
                    </div>
                    <div>
                        <h3 class="text-l font-semibold">Status</h3>
                        <p :class="(data.status)">
                            {{ data.status === 1 ? 'Active' : 'Inactive' }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- tabs -->
            <div class="bg-white mt-10 shadow-md rounded-lg p-6 mb-6">
                <div class="border-b mb-4">
                    <button
                    :class="{'border-b-2 border-blue-500': activeTab === 'comments'}"
                    class="p-2 focus:outline-none"
                    @click="activeTab = 'comments'"
                    >
                    Comments
                    </button>
                    <button
                    :class="{'border-b-2 border-blue-500': activeTab === 'files'}"
                    class="p-2 focus:outline-none"
                    @click="activeTab = 'files'"
                    >
                    Files
                    </button>
                </div>
                <div>
                    <div v-if="activeTab === 'comments'">
                    <!-- Comments content goes here -->
                    <h3 class="text-lg font-semibold mb-2">Comments</h3>
                    <Editor v-model="value" editorStyle="height: 320px" />
                    <p class="text-gray-600">No comments available.</p>
                    </div>
                    <div v-if="activeTab === 'files'">
                    <!-- Files content goes here -->
                    <h3 class="text-lg font-semibold mb-2">Files</h3>
                    <p class="text-gray-600">No files available.</p>
                    </div>
                </div>
            </div>
        </div>
        </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import Editor from 'primevue/editor';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGeneralStore } from '@/stores/general'

const route = useRoute()
const data = ref([])
const generalStore = useGeneralStore()
let activeTab = ref('comments')
onMounted(() => {
  try {
    getProject()
  } catch (error) {
    console.log(error)
  }
})

const getProject = async (filterParams = null) => {
  let url = '/api/project/' + route.params.id
  generalStore.getData(url, filterParams).then(() => {
    // custimize values for datatable library
    if (generalStore.data) {
      data.value = generalStore.data
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
</script>