<template>
  <div class="bg-[#FFFAF5] text-black">
    <div class="container mx-auto py-10">
      <h1 class="text-4xl text-center py-5 font-bold">
        <span class="text-[#3AA9D0] font-bold">Admin Panel</span> For the company CEO
      </h1>
      <p class="text-center py-5 text-gray-500 max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae est debitis quasi
        reprehenderit voluptatibus deserunt, corrupti labore adipisci reiciendis et atque fuga, non
        obcaecati dolores iusto ipsa, magnam iste dicta.
      </p>
      <!-- <div class="flex flex-wrap justify-between w-[25rem] mt-5 mx-auto">
      <app-button v-for="category in categories" :key="category.id" :active="currentCategory.id == category.id"
        @click="currentCategory = category">{{ category.name }}
      </app-button>
    </div> -->
      <!-- <Category :category="currentCategory" /> -->

      <div class="md:flex py-5">
        <ul
          class="flex-column cursor-pointer font-bold md:w-1/2 p-5 space-y space-y-4 text-sm text-black dark:text-gray-400 md:me-4 mb-4 md:mb-0"
        >
          <li
            class="bg-white px-4 py-3 shadow border-[1px] rounded-xl transition-colors duration-300 ease-in-out"
            :class="{
              'border-[#3AA9D0] active': activeTab == 'firstTab',
              'border-black': activeTab != 'firstTab'
            }"
          >
            <a
              v-on:click="activeTab = 'firstTab'"
              class="inline-flex font-bold text-xl items-center rounded-lg w-full"
              aria-current="page"
            >
              CEO
              <i class="ml-auto">
                <font-awesome-icon v-if="activeTab == 'firstTab'" :icon="['fa', 'arrow-down']" />
                <font-awesome-icon v-else :icon="['fa', 'arrow-right']" />
              </i>
            </a>
            <p v-if="activeTab == 'firstTab'" class="mt-5 text-black">
              At Teamplo, the CEO plays a pivotal role in project management. Their responsibilities
              include setting the strategic vision, allocating resources, and ensuring alignment
              with the company’s goals. The CEO works closely with senior management to define
              project priorities and drive overall success. By fostering a culture of innovation and
              excellence, the CEO empowers the entire organization to achieve its project objectives
              efficiently.
            </p>
          </li>
          <li
            class="bg-white px-4 py-3 border-[1px] rounded-xl transition-colors duration-300 ease-in-out"
            :class="{
              'border-[#3AA9D0] active': activeTab == 'secondTab',
              'border-black': activeTab != 'secondTab'
            }"
          >
            <a
              v-on:click="activeTab = 'secondTab'"
              class="inline-flex font-bold text-xl items-center rounded-lg w-full"
              aria-current="page"
            >
              Employee
              <i class="ml-auto">
                <font-awesome-icon v-if="activeTab == 'secondTab'" :icon="['fa', 'arrow-down']" />
                <font-awesome-icon v-else :icon="['fa', 'arrow-right']" />
              </i>
            </a>
            <p v-if="activeTab == 'secondTab'" class="mt-5 text-black">
              Employees at Teamplo are integral to the success of every project. They bring their
              unique skills and expertise to the table, contributing to the completion of tasks and
              milestones. Each team member is encouraged to take ownership of their roles and
              collaborate effectively with colleagues. Continuous learning and professional
              development are emphasized, enabling employees to grow and excel in their careers
              while delivering high-quality project outcomes.
            </p>
          </li>
          <li
            class="bg-white px-4 py-3 border-[1px] rounded-xl transition-colors duration-300 ease-in-out"
            :class="{
              'border-[#3AA9D0] active': activeTab == 'thirdTab',
              'border-black': activeTab != 'thirdTab'
            }"
          >
            <a
              v-on:click="activeTab = 'thirdTab'"
              class="inline-flex font-bold text-xl items-center rounded-lg w-full"
              aria-current="page"
            >
              HR
              <i class="ml-auto">
                <font-awesome-icon v-if="activeTab == 'thirdTab'" :icon="['fa', 'arrow-down']" />
                <font-awesome-icon v-else :icon="['fa', 'arrow-right']" />
              </i>
            </a>
            <p v-if="activeTab == 'thirdTab'" class="mt-5 text-black">
              The HR department at Teamplo supports project management by recruiting and retaining
              top talent. They ensure that the right people are in place to meet project demands. HR
              is also responsible for creating a positive work environment, offering training
              programs, and implementing policies that enhance productivity and job satisfaction. By
              aligning HR strategies with project goals, they help maintain a motivated and capable
              workforce.
            </p>
          </li>
          <li
            class="bg-white px-4 py-3 border-[1px] rounded-xl transition-colors duration-300 ease-in-out"
            :class="{
              'border-[#3AA9D0] active': activeTab == 'fourthTab',
              'border-black': activeTab != 'fourthTab'
            }"
          >
            <a
              v-on:click="activeTab = 'fourthTab'"
              class="inline-flex font-bold text-xl items-center rounded-lg w-full"
              aria-current="page"
            >
              Team Leader
              <i class="ml-auto">
                <font-awesome-icon v-if="activeTab == 'fourthTab'" :icon="['fa', 'arrow-down']" />
                <font-awesome-icon v-else :icon="['fa', 'arrow-right']" />
              </i>
            </a>
            <p v-if="activeTab == 'fourthTab'" class="mt-5 text-black">
              Project Managers at Teamplo are the backbone of project execution. They oversee
              planning, execution, and closing of projects, ensuring that all phases are completed
              on time and within budget. Project Managers coordinate resources, manage risks, and
              communicate with stakeholders to keep everyone informed and engaged. Their leadership
              and problem-solving skills are crucial for navigating challenges and achieving project
              success.
            </p>
          </li>
        </ul>
        <div class="p-6 text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full">
          <img
            v-if="activeTab == 'firstTab'"
            src="../../assets/project-manamgement.svg"
            class="mx-auto hidden lg:block"
          />
          <img
            v-if="activeTab == 'secondTab'"
            src="../../assets/dashboard-v1.png"
            class="mx-auto hidden lg:block"
          />
          <img
            v-if="activeTab == 'thirdTab'"
            src="../../assets/dashboard-v2.png"
            class="mx-auto hidden lg:block"
          />
          <img
            v-if="activeTab == 'fourthTab'"
            src="../../assets/dashboard.svg"
            class="mx-auto hidden lg:block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/Frontend/AppButton.vue'
import Category from '@/components/Frontend/Category.vue'
import { ref, onMounted } from 'vue'
let activeTab = ref('firstTab')
const props = defineProps({
  categories: Array
})
const currentCategory = ref(props.categories[0])
</script>
