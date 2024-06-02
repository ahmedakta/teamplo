<template>
  <MainLayout>
    <div
      class="container w-full md:flex justify-between items-center flex-wrap gap-4 font-semibold"
    >
      <div class="mb-5 rounded-xl">
        <input
          v-model="filterParams.search"
          type="text"
          class="form-input max-w-xs py-2 px-3 border-blue-100 border-2 rounded-xl"
          placeholder="Search..."
        />
      </div>
      <!-- <button type="button" class="btn btn-outline" @click="getFilteredRows()">Get Filtered Rows</button>
      <button type="button" class="btn btn-outline" @click="getSelectedRows()">Get Selected Rows</button> -->
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="clearSelectedRows()"
      >
        Add Project <font-awesome-icon :icon="['fa', 'plus']" />
      </button>
    </div>
    <div class="container md:flex flex-col bg-white w-full rounded-xl h-screen">
      <!-- <DataTable :items="[1 , 2, 3, 6,8]"/> -->
      <vue3-datatable
        ref="datatable"
        skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"
        :loading="generalStore.isLoading"
        :sortable="true"
        :pageSize="15"
        :sortColumn="params.sort_column"
        :totalRows="params.total_rows"
        :sortDirection="params.sort_direction"
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
        <template #actions="data">
          <div class="flex gap-4">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded !py-1"
              @click="deleteUser(data.value)"
            >
              <font-awesome-icon :icon="['fas', 'eye']" />
            </button>
            <button
              type="button"
              class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded !py-1"
              @click="viewUser(data.value)"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
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
</style>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()

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
  alert(
    'project Details \n' +
      project.id +
      ', ' +
      project.project_name +
      ', ' +
      project.project_started_at +
      ', ' +
      project.status
  )
}
// selected items
const getSelectedRows = () => {
  const selected = datatable.value.getSelectedRows()
  console.log(selected)
  alert('Rows selected: ' + selected?.length || 0)
}

// change server function
const changeServer = (data: any) => {
  filterParams.page = data.current_page
  getProjects(filterParams)
}
</script>
