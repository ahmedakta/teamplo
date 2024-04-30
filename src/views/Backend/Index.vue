<script setup>
import { ref, onMounted } from 'vue'
import { useTaskStore } from '@/stores/teskStore'
import MainLayout from '@/layouts/Backend/MainLayout.vue'
const taskStore = useTaskStore()
const errors = ref()
onMounted(() => {
  taskStore.fetchTasks()
})
const deleteTask = async (task) => {
  errors.value = null

  try {
    await taskStore.getTokens()
    await taskStore.deleteTask(task)
    // , { withCredentials: true }
  } catch (error) {
    errors.value = error.response.data.errors
  }
}

// example attrs to the vcalendar
const attrs = ref([
  {
    key: 'test',
    highlight: true,
    dates: { start: new Date(2019, 3, 15), end: new Date(2019, 3, 19) }
  }
])
const task = ref('')
</script>

<template>
  <MainLayout>
    <div class="container w-full h-[25rem] flex flex-wrap mx-auto justify-between">
      <!-- company updates section -->
      <div class="bg-white md:w-1/2 rounded-xl w-full">
        <!-- header -->
        <div class="flex justify-between">
          <div>
            <h1 class="font-bold text-xl text-black p-5">Company Updates</h1>
          </div>
          <div>
            <select name="" id="" class="bg-gray-200 m-5 py-1 px-2 rounded-xl">
              <option value="">Nisan</option>
              <option value="">Augustos</option>
              <option value="">Ekim</option>
              <option value="">Aralik</option>
            </select>
          </div>
        </div>
        <!-- company updates -->
        <VDatePicker
          v-model="selectedDate"
          borderless
          :initial-page="{ month: 4, year: 2019 }"
          :color="selectedColor"
          :attributes="attrs"
          expanded
          is-dark="system"
        />
      </div>
      <!-- recent mountained tasks section -->
      <div class="bg-white w-full md:w-1/2 rounded-xl">
        <!-- header of div -->
        <div class="flex justify-between">
          <div>
            <h1 class="font-bold text-xl text-black p-5">Recent Mentioned Tasks</h1>
          </div>
          <div>
            <select name="" id="" class="bg-gray-200 m-5 py-1 px-2 rounded-xl">
              <option value="">Priority</option>
              <option value="">High</option>
              <option value="">Medium</option>
              <option value="">Low</option>
            </select>
          </div>
        </div>
        <!-- tasks -->
        <div class="bg-white w-full flex flex-col mx-auto">
          <div class="flex shadow py-3 m-3 rounded-xl">
            <img src="../../assets/icons/task-todo.png" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>Todo (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl">
            <img
              src="../../assets/icons/task-inProgress.png"
              alt=""
              class="rounded-xl w-[4rem] px-5"
            />
            <p>In Progress (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl">
            <img src="../../assets/icons/task-done.png" alt="" class="rounded-xl w-[4rem] px-5" />
            <p>Done (18)</p>
          </div>
          <div class="flex shadow py-3 m-3 rounded-xl">
            <img
              src="../../assets/icons/task-unassigned.png"
              alt=""
              class="rounded-xl w-[4rem] px-5"
            />
            <p>Unassigned (18)</p>
          </div>
        </div>
      </div>

      <!-- projects section -->
      <div class="container">
        <h1 class="">Projects Progress</h1>
      </div>
    </div>
  </MainLayout>
</template>
