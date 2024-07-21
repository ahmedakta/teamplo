<template>
  <MainLayout>
    <div class="container max-w-[7xl] mx-auto flex flex-wrap justify-between">
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
        <template #user_id="data">
          <p class="text-black px-2 text-center py-1 rounded">
            {{ data.value.user.name }}
          </p>
        </template>
        <!-- actions -->
        <template #actions="data">
          <div class="flex gap-4">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded !py-1"
              @click="viewContent(data.value.slug)"
            >
              <font-awesome-icon :icon="['fas', 'eye']" />
            </button>
            <Button
              type="button"
              class="bg-red-500 text-white font-bold py-2 px-3 border-b-4 border-teds-700 hover:red-blue-500 rounded !py-1"
              @click="
                generalStore.makeRequest(
                  '/api/content/' + data.value.slug + '/delete',
                  {
                    content_slug: data.value.slug
                  },
                  'DELETE',
                  null,
                  '/api/contents'
                )
              "
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </Button>
          </div>
        </template>
      </vue3-datatable>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, reactive, onMounted } from 'vue'
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'
import { useGeneralStore } from '@/stores/general'
import { useDataTableStore } from '@/stores/datatable'
import { useRouter } from 'vue-router'
const router = useRouter()
const generalStore = useGeneralStore()
const datatableStore = useDataTableStore()
const datatable: any = ref(null)

onMounted(() => {
  try {
    getContents()
  } catch (error) {
    console.log(error)
  }
})

const getContents = async (filterParams = generalStore.filterParams) => {
  generalStore.makeRequest('/api/contents', filterParams).then(() => {
    generalStore.setDataTable()
  })
}
// change server function
const changeServer = (data: any) => {
  generalStore.filterParams.page = data.current_page
  getContents(generalStore.filterParams)
}

const viewContent = (slug = null) => {
  router.push(`/content/${slug}`)
}
</script>
