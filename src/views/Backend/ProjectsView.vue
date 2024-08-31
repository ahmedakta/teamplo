<template>
  <MainLayout>
    <!-- Header -->
    <div class="flex justify-between py-5">
      <h1 class="font-bold text-lg">Projects</h1>
      <RouterLink
        to="/project/create"
        class="rounded-2xl bg-[#3aa9d0] text-white border-[1px] border-gray-200 text-center py-3 px-3 me-2"
      >
        <font-awesome-icon class="rounded-xl border-2 border-white" :icon="['fa', 'plus']" />
        Create New Project
      </RouterLink>
    </div>

    <!-- Filter Butons -->
    <div
      class="container bg-white rounded-t-2xl w-full h-28 md:flex justify-between items-center flex-wrap gap-4 font-semibold"
    >
      <div class="rounded-xl w-full md:w-auto flex">
        <div class="relative flex items-center h-full justify-between bg-white py-3 px-3">
          <input
            v-model="generalStore.filterParams.search"
            class="h-12 rounded-lg border-[1px] border-gray-200 pl-10 pr-3 w-full"
            type="text"
            placeholder="search by name, ID, or keyword"
          />
          <img src="@/assets/icons/ic_search.svg" class="absolute left-5 text-black" alt="Search" />
        </div>
        <div class="flex justify-between bg-white rounded-2xl">
          <form
            @submit.prevent="
              () => {
                generalStore.filterParams.order && generalStore.filterParams.order == 'ASC'
                  ? (generalStore.filterParams.order = 'DESC')
                  : (generalStore.filterParams.order = 'ASC')
                projectStore.getProjects(generalStore.filterParams)
              }
            "
            class="relative flex items-center h-full justify-between mr-5 bg-white text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 focus:outline-none w-full md:w-auto"
          >
            <button type="submit" class="absolute left-5 py-3 px-3 text-black">
              <font-awesome-icon
                v-if="generalStore.filterParams.order == 'DESC'"
                :icon="['fa-solid', 'arrow-down-wide-short']"
              />
              <font-awesome-icon v-else :icon="['fa-sold', 'arrow-up-short-wide']" />
            </button>
            <select
              v-model="generalStore.filterParams.sort_by"
              class="h-12 rounded-lg border-[1px] border-gray-200 pl-10 pr-3 w-full"
              required
            >
              <option class="text-black rounded-md" selected>Sort By Column</option>
              <option value="id" class="bg-white text-black rounded-md">ID</option>
              <option value="project_budget" class="bg-white text-black rounded-md">
                Project Budget
              </option>
              <option value="project_priority" class="bg-white text-black rounded-md">
                Project Priority
              </option>
              <option value="project_stage" class="bg-white text-black rounded-md">
                Project Stage
              </option>
              <option value="created_at" class="bg-white text-black rounded-md">Created At</option>
            </select>
          </form>
        </div>
      </div>
      <!-- Filter Section -->
      <div class="rounded-xl w-full md:w-auto flex">
        <ul
          v-if="isOpen"
          class="absolute mt-0.5 p-2.5 min-w-[150px] bg-white rounded shadow-md space-y-1 z-10"
        >
          <li v-for="col in datatableStore.cols" :key="col.field">
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

        <div class="relative flex items-center h-full justify-between bg-white py-3 px-3">
          <input
            @change="projectStore.getProjects(generalStore.filterParams)"
            v-model="generalStore.filterParams.project_start_at"
            class="h-12 rounded-lg border-[1px] border-gray-200 pl-10 w-32"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            placeholder="Start Date"
          />
          <img src="@/assets/icons/calendar.svg" class="absolute left-5 text-black" alt="Search" />
        </div>
        <div class="relative flex items-center h-full justify-between bg-white py-3 px-3">
          <input
            @change="projectStore.getProjects(generalStore.filterParams)"
            v-model="generalStore.filterParams.project_end_at"
            class="h-12 rounded-lg border-[1px] border-gray-200 pl-10 w-32"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            placeholder="End Date"
          />
          <img src="@/assets/icons/calendar.svg" class="absolute left-5 text-black" alt="Search" />
        </div>
        <div class="py-3 px-3">
          <button
            type="button"
            @click="generalStore.openModal('filterModal')"
            class="rounded-lg border-[1px] border-gray-200 text-center py-3 px-3"
          >
            <font-awesome-icon class="text-[#3aa9d0]" :icon="['fa', 'robot']" /> Automation
          </button>
        </div>
        <div class="py-3 px-3">
          <button
            type="button"
            @click="generalStore.openModal('filterModal')"
            class="rounded-lg border-[1px] border-gray-200 text-center py-2 px-2"
          >
            <img src="/src/assets/icons/filter.svg" class="rounded-full" alt="User 1" />
          </button>
        </div>
        <div class="py-3 px-3">
          <button
            class="rounded-lg border-[1px] border-gray-200 text-center py-2 px-2"
            type="button"
            @click="isOpen = !isOpen"
          >
            <img src="/src/assets/icons/sort.svg" class="rounded-full" alt="User 1" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex space-x-2 bg-white" v-if="generalStore.data.filter_form">
      <div v-for="(param, key) in generalStore.filterParams" :key="key">
        <!-- Handling the filter params one by one to display the name of filtered item -->
        <div
          class="bg-gray-200 text-gray-700 px-5 py-2 m-1 rounded-full"
          v-if="key != 'page' && key != 'order'"
        >
          <!-- Department -->
          <div class="flex items-center" v-if="key == 'department_id'">
            <span class="mr-2">
              Department :
              {{
                generalStore.data.filter_form.departments[param]
                  ? generalStore.data.filter_form.departments[param].department_name
                  : ''
              }}
            </span>
            <button
              @click="removeFilterParam(key)"
              class="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              x
            </button>
          </div>
          <!-- Stage -->
          <div class="flex items-center" v-else-if="key == 'project_stage'">
            <span class="mr-2">Stage : {{ generalStore.data.filter_form.stages[param] }}</span>
            <button
              @click="removeFilterParam(key)"
              class="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              x
            </button>
          </div>
          <!-- Priority -->
          <div class="flex items-center" v-else-if="key == 'project_priority'">
            <span class="mr-2"
              >Priority : {{ generalStore.data.filter_form.priorities[param] }}</span
            >
            <button
              @click="removeFilterParam(key)"
              class="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              x
            </button>
          </div>
          <!-- AS IT IS -->
          <div class="flex items-center" v-else>
            <span class="mr-2"> {{ key }} : {{ param }}</span>
            <button
              @click="removeFilterParam(key)"
              class="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Datatable -->

    <div class="container md:flex flex-col bg-white w-full rounded-xl h-screen">
      <vue3-datatable
        ref="datatable"
        skin="bh-table-compact"
        :loading="generalStore.isLoading"
        :pageSize="15"
        :sortable="true"
        :page="datatableStore.params.current_page"
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
        <template #project_end_at="data"> {{ data.value.project_end_at }} Days Left </template>
        <template #assignments="data">
          <div class="flex -space-x-2">
            <div
              v-for="(user, key) in data.value.users"
              :key="key"
              class="relative group"
              :data-username="user.name"
            >
              <img
                :src="'/src/assets/' + user.image"
                class="w-10 h-10 rounded-full border-2 border-gray-200"
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
                class="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-4 py-1 rounded opacity-0 group-hover:opacity-100"
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
            class="inline-block px-3 py-1 text-sm font-medium rounded-full"
            :class="`text-${data.value.stage.category_color}-500 border-2 border-${data.value.stage.category_color}-500`"
          >
            {{ data.value.stage.category_name }}
          </p>
        </template>
        <template #project_priority="data">
          <p
            class="text-black px-2 text-center py-1 rounded"
            :class="`text-${data.value.stage.category_color}-500 bg-${data.value.stage.category_color}-100`"
          >
            {{ data.value.priority.category_name }}
          </p>
        </template>
        <template #actions="data">
          <div class="flex gap-1">
            <!-- <RouterLink
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 hover:border-blue-500 rounded !py-1"
              :to="{
                name: 'backend.projects.view',
                params: { slug: data.value.slug }
              }"
            >
              <font-awesome-icon :icon="['fas', 'eye']" />
            </RouterLink>
            <RouterLink
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 hover:border-blue-500 rounded !py-1"
              :to="{
                name: 'backend.department.project.tasks',
                params: {
                  department_slug: data.value.department.slug,
                  project_slug: data.value.slug
                }
              }"
            >
              <font-awesome-icon :icon="['fas', 'bars']" />
            </RouterLink> -->
            <RouterLink
              :to="{
                name: 'backend.projects.view',
                params: { slug: data.value.slug }
              }"
            >
              <font-awesome-icon
                :icon="['fas', 'ellipsis-vertical']"
                class="hover:bg-gray-400 text-black font-bold px-3 hover:border-gray-500 rounded !py-1"
              />
            </RouterLink>
            <RouterLink
              :to="{
                name: 'backend.department.project.tasks',
                params: {
                  department_slug: data.value.department.slug,
                  project_slug: data.value.slug
                }
              }"
            >
              <img
                src="/src/assets/ai-technology.svg"
                width="20"
                alt="AI Icon"
                class="hover:bg-blue-400 text-white font-bold hover:border-blue-500 rounded"
              />
            </RouterLink>
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
  height: 0.5rem;
  background-color: #e5e7eb; /* Tailwind's bg-gray-200 */
  border-radius: 0.5rem;
}
.progress-bar::-webkit-progress-value {
  background-color: gray; /* Tailwind's bg-blue-500 */
  border-radius: 0.5rem 0 0 0.5rem;
}
.progress-bar::-moz-progress-bar {
  background-color: gray; /* Tailwind's bg-blue-500 */
  border-radius: 0.5rem;
}
</style>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'
import { useGeneralStore } from '@/stores/general'
import { useProjectStore } from '@/stores/project'
import { useDataTableStore } from '@/stores/datatable'
const generalStore = useGeneralStore()
const datatableStore = useDataTableStore()
const projectStore = useProjectStore()
const isOpen = ref(false)
const datatable: any = ref(null)
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

onMounted(() => {
  try {
    // TODO : this logic loadng data twice
    generalStore.updateFilterParams()

    projectStore.getProjects()
  } catch (error) {
    console.log(error)
  }
})
// watch the filter queries
watch(
  () => route.query,
  newQuery => {
    // generalStore.filterParams = newQuery
    projectStore.getProjects(newQuery)
  },
  { immediate: true } // Trigger the watcher immediately on component mount
)
const removeFilterParam = (key = null) => {
  if (key) {
    delete generalStore.filterParams[key]
  }
  projectStore.getProjects()
}
// change server function
const changeServer = (data: any) => {
  generalStore.filterParams.page = data.current_page
  projectStore.getProjects(generalStore.filterParams)
}
</script>
