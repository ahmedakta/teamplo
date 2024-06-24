<template>
  <MainLayout>
    <div
      class="container w-full md:flex justify-between items-center flex-wrap gap-4 font-semibold"
    >
      <div class="mb-5 rounded-xl">
        <input
          v-model="filterParams.search"
          type="text"
          class="form-input max-w-xs py-2 px-3 border-blue-700 border-[1px] rounded-xl"
          placeholder="Search..."
        />
      </div>
      <!-- Filter Section -->
      <div class="mb-5 relative">
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
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Project <font-awesome-icon :icon="['fa', 'plus']" />
        </RouterLink>
        <button
          type="button"
          @click="generalStore.openModal('filterModal')"
          class="text-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          <font-awesome-icon :icon="['fa', 'filter']" />
        </button>
        <button
          class="text-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-none"
          type="button"
          @click="isOpen = !isOpen"
        >
          <font-awesome-icon :icon="['fa', 'bars']" />
        </button>
      </div>
      <!-- <button type="button" class="btn btn-outline" @click="getFilteredRows()">Get Filtered Rows</button>
          <button type="button" class="btn btn-outline" @click="getSelectedRows()">Get Selected Rows</button> -->
    </div>
    <div class="container md:flex flex-col bg-white w-full rounded-xl h-screen">
      <!-- <DataTable :items="[1 , 2, 3, 6,8]"/> -->
      <vue3-datatable
        ref="datatable"
        skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"
        :loading="generalStore.isLoading"
        :pageSize="15"
        :sortable="true"
        :sortColumn="params.sort_column"
        :sortDirection="params.sort_direction"
        :totalRows="params.total_rows"
        :search="filterParams.search"
        :rows="data"
        :columns="cols"
        :hasCheckbox="true"
        :isServerMode="true"
        :showNumbersCount="15"
        :pageSizeOptions="[10, 15, 30, 50]"
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
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl rounded-full opacity-0 group-hover:opacity-100"
              >
                ×
              </div>
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-4 py-1 rounded opacity-0 group-hover:opacity-100"
              >
                Test
              </div>
            </div>
            <div class="relative group">
              <span
                @click="
                  generalStore.openModal('assignUserModal', {
                    department_id: data.value.department.id
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
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded !py-1"
              @click="viewProject(data.value.slug)"
            >
              <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
            <!-- <button
              type="button"
              class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-3 border-b-4 border-red-700 hover:border-red-500 rounded !py-1"
              @click="generalStore.deleteData('api/project/delete/' + data.value.id)"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button> -->
          </div>
        </template>
      </vue3-datatable>
      <!-- :isServerMode="true" -->
      <!-- @change="changeServer" -->
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
import { useRouter } from 'vue-router'
const router = useRouter()
const generalStore = useGeneralStore()
const isOpen = ref(false)
const datatable: any = ref(null)
const cols: any = ref([])
const data: any = ref([])
const params: any = ref({})
const filterParams: any = reactive({})

onMounted(() => {
  try {
    getProjects()
  } catch (error) {
    console.log(error)
  }
})

const getProjects = async (filterParams = null) => {
  generalStore.getData('/api/projects', filterParams).then(() => {
    // custimize values for datatable library
    if (generalStore.data && generalStore.data.cols && generalStore.data.data.data) {
      cols.value = JSON.parse(generalStore.data.cols)
      data.value = generalStore.data.data.data
      params.value = reactive({
        current_page: generalStore.data.data.current_page,
        page_size: generalStore.data.data.per_page,
        sort_column: 'id',
        total_rows: generalStore.data.data.total,
        sort_direction: 'asc'
      })
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
const rowClick = (project: any) => {
  // router.push(`/project/${project.id}`)
  // alert(
  //   'project Details \n' +
  //     project.id +
  //     ', ' +
  //     project.project_name +
  //     ', ' +
  //     project.project_started_at +
  //     ', ' +
  //     project.status
  // )
}

// selected items
const getSelectedRows = () => {
  const selected = datatable.value.getSelectedRows()
  console.log(selected)
  alert('Rows selected: ' + selected?.length || 0)
}
const viewProject = (slug) => {
  router.push(`/project/${slug}`)
}
// change server function
const changeServer = (data: any) => {
  filterParams.page = data.current_page
  getProjects(filterParams)
}
</script>
