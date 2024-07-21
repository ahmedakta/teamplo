<template>
  <MainLayout>
    <div class="container max-w-[7xl] mx-auto flex flex-wrap justify-between">
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
            Add Content <font-awesome-icon :icon="['fa', 'plus']" />
          </RouterLink>
          <button
            type="button"
            @click="generalStore.openModal('filterModal')"
            class="text-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full md:w-auto"
          >
            <font-awesome-icon :icon="['fa', 'filter']" />
          </button>
        </div>
      </div>
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
            <!-- TODO : MAKE ALL ROUTER LINKS LIKE THIS ONE :::: {name , params ...} -->
            <RouterLink
              :to="{
                name: 'backend.contentCreator.content.view',
                params: { slug: data.value.slug }
              }"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded !py-1"
            >
              <font-awesome-icon :icon="['fas', 'eye']" />
            </RouterLink>
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
