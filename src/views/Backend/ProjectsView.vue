<template>
  <MainLayout>
    <div
      class="container w-full md:flex justify-between items-center flex-wrap gap-4 font-semibold"
    >
      <div class="mb-5 rounded-xl w-full md:w-auto">You Can put something here</div>
      <!-- Filter Section -->
      <div class="mb-5 relative w-full md:w-auto">
        <ul
          v-if="isOpen"
          class="absolute left-0 mt-0.5 p-2.5 min-w-[150px] bg-white rounded shadow-md space-y-1 z-10"
        >
          <li v-for="col in cols" :key="col.field">
            <label
              class="flex items-center gap-2 w-full cursor-pointer text-gray-600 hover:text-black"
            >
              <input
                type="checkbox"
                class="form-checkbox"
                :checked="!col.hide"
                @change="col.hide = !$event.target.checked"
              />
              <span>{{ col.title }}</span>
            </label>
          </li>
        </ul>
        <RouterLink
          to="/project/create"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full md:w-auto"
        >
          Add Project <font-awesome-icon :icon="['fa', 'plus']" />
        </RouterLink>
        <button
          type="button"
          @click="generalStore.openModal('filterModal')"
          class="text-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full md:w-auto"
        >
          <font-awesome-icon :icon="['fa', 'filter']" />
        </button>
        <button
          class="text-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-none w-full md:w-auto"
          type="button"
          @click="isOpen = !isOpen"
        >
          <font-awesome-icon :icon="['fa', 'bars']" />
        </button>
      </div>
    </div>
    <div class="flex space-x-2">
      <div
        v-for="(param, key) in generalStore.filterParams"
        :key="key"
        class="bg-gray-200 text-gray-700 px-5 py-2 m-1 rounded-full flex items-center"
      >
        <span class="mr-2"> {{ key }} : {{ param }}</span>
        {{ generalStore.filterParams }}
        <button
          @click="generalStore.filterParams.splice(key , 1)"
          class="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
        >
          x
        </button>
      </div>
    </div>
    <div class="container md:flex flex-col bg-white w-full rounded-xl h-screen">
      <vue3-datatable
        ref="datatable"
        skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"
        :loading="generalStore.isLoading"
        :pageSize="15"
        :sortable="true"
        :sortColumn="datatableStore.params.sort_column"
        :sortDirection="datatableStore.params.sort_direction"
        :totalRows="datatableStore.params.total_rows"
        :search="generalStore.filterParams.search"
        :rows="datatableStore.data.data"
        :columns="datatableStore.cols"
        :hasCheckbox="true"
        :isServerMode="true"
        :showNumbersCount="15"
        :pageSizeOptions="[10, 15, 30, 50]"
        noDataContent="No records found in the database."
        class="next-prev-pagination"
        @rowClick="rowClick"
        @change="changeServer"
      >
        <template #id="data">
          <strong class="text-info">{{ data.value.id }} </strong>
        </template>
        <template #progress="data">
          <progress
            id="file"
            :value="data.value.progress"
            max="100"
            class="progress-bar w-full h-4"
          >
            {{ data.value.progress }}
          </progress>
        </template>
        <template #assignments="data">
          <div class="flex -space-x-2">
            <div
              v-for="(user, key) in data.value.users"
              :key="key"
              class="relative group"
              :data-username="user.name"
            >
              <img
                src="@/assets/default_profile_image.png"
                class="w-10 h-10 rounded-full border-2 border-white"
                alt="User 1"
              />
              <div
                class="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl rounded-full opacity-0 group-hover:opacity-100"
                @click="
                  generalStore.makeRequest(
                    'api/project/assign-user',
                    { user_id: user.id, project_id: data.value.id },
                    'POST',
                    null,
                    '/api/projects'
                  )
                "
              >
                ×
              </div>
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-4 py-1 rounded opacity-0 group-hover:opacity-100"
              >
                {{ user.name }}
              </div>
            </div>
            <div class="relative group cursor-pointer">
              <span
                @click="
                  generalStore.openModal('assignUserModal', {
                    department_id: data.value.department.id,
                    project_id: data.value.id
                  })
                "
                class="flex items-center justify-center w-10 h-10 text-green-800 bg-green-100 rounded-full"
                >+</span
              >
            </div>
          </div>
        </template>
        <template #department_id="data">
          <p class="text-black px-2 text-center py-1 rounded">
            {{ data.value.department.department_name }}
          </p>
        </template>
        <template #project_stage="data">
          <p
            class="text-black px-2 text-center py-1 rounded"
            :class="data.value.stage.category_color"
          >
            {{ data.value.stage.category_name }}
          </p>
        </template>
        <template #project_priority="data">
          <p class="text-black px-2 text-center py-1 rounded">
            {{ data.value.priority.category_name }}
          </p>
        </template>
        <template #actions="data">
          <div class="flex gap-4">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded !py-1"
              @click="viewProject(data.value.slug)"
            >
              <font-awesome-icon :icon="['fas', 'eye']" />
            </button>
            <Button
              type="button"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded !py-1"
              @click="
                pushRoute('backend.department.project.tasks', {
                  department_slug: data.value.department.slug,
                  project_slug: data.value.slug
                })
              "
            >
              <font-awesome-icon :icon="['fas', 'bars']" />
            </Button>
          </div>
        </template>
      </vue3-datatable>
    </div>
  </MainLayout>
</template>
<style>
.bh-datatable .bh-table-responsive {
  @apply min-h-[380px];
}
.progress-bar::-webkit-progress-bar {
  background-color: #e5e7eb; /* Tailwind's bg-gray-200 */
  border-radius: 0.5rem;
}
.progress-bar::-webkit-progress-value {
  background-color: #3b82f6; /* Tailwind's bg-blue-500 */
  border-radius: 0.5rem 0 0 0.5rem;
}
.progress-bar::-moz-progress-bar {
  background-color: #3b82f6; /* Tailwind's bg-blue-500 */
  border-radius: 0.5rem;
}
</style>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'
import { useGeneralStore } from '@/stores/general'
import { useDataTableStore } from '@/stores/datatable'
import { useRouter } from 'vue-router'
const router = useRouter()
const generalStore = useGeneralStore()
const datatableStore = useDataTableStore()
const isOpen = ref(false)
const datatable: any = ref(null)

onMounted(() => {
  try {
    getProjects()
  } catch (error) {
    console.log(error)
  }
})

const getProjects = async (filterParams = generalStore.filterParams) => {
  generalStore.makeRequest('/api/projects', filterParams).then(() => {
    generalStore.setDataTable()
  })
}
const pushRoute = (urlName = null, params = null) => {
  console.log(params)
  console.log(urlName)
  router.push({
    name: urlName,
    params: { department_slug: params.department_slug, project_slug: params.project_slug }
  })
}

const viewProject = (slug = null) => {
  router.push(`/project/${slug}`)
}
// change server function
const changeServer = (data: any) => {
  generalStore.filterParams.page = data.current_page
  getProjects(generalStore.filterParams)
}
</script>
