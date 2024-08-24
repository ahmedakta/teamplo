<template>
  <div class="bg-[#FFFAF5] text-black">
    <div class="container mx-auto py-10">
      <h1 class="text-4xl text-center py-5 font-bold">
        <span class="text-[#3AA9D0] font-bold">Admin Panel</span> For the company CEO
      </h1>
      <p class="text-center py-5 text-gray-500 max-w-4xl mx-auto">
        Welcome to the CEO Admin Panel for Teamplo. Access real-time insights, manage resources,
        budgets, and timelines, and communicate seamlessly with teams. Ensure data integrity with
        robust security. Streamline decision-making and boost productivity with this command center.
      </p>
      <!-- <div class="flex flex-wrap justify-between w-[25rem] mt-5 mx-auto">
      <app-button v-for="category in categories" :key="category.id" :active="currentCategory.id == category.id"
        @click="currentCategory = category">{{ category.name }}
      </app-button>
    </div> -->
      <!-- <Category :category="currentCategory" /> -->

      <div class="md:flex py-5">
        <!-- Mobile Categories Slider -->
        <ul
          class="flex-column md:hidden cursor-pointer font-bold md:w-1/2 p-5 space-y space-y-4 text-sm text-black md:me-4 mb-4 md:mb-0"
        >
          <swiper
            :modules="[Pagination]"
            :slides-per-view="1"
            :space-between="10"
            :pagination="{
              dynamicBullets: true
            }"
            :breakpoints="{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 30 },
              1024: { slidesPerView: 1, spaceBetween: 40 }
            }"
          >
            <swiper-slide v-for="(category, index) in categories" :key="index">
              <Category
                v-on:click="activeTab = category.tab"
                :category="category"
                :activeTab="activeTab"
                class="mb-10"
                :class="{
                  'border-[#3AA9D0] active': activeTab == category.tab,
                  'border-black': activeTab != category.tab
                }"
              />
            </swiper-slide>
          </swiper>
        </ul>
        <!-- Desktop Categories -->
        <ul
          class="flex-column md:block hidden cursor-pointer font-bold md:w-1/2 p-5 space-y space-y-4 text-sm text-black md:me-4 mb-4 md:mb-0"
        >
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="bg-white px-4 py-3 shadow border-[1px] rounded-xl transition-colors duration-300 ease-in-out"
            :class="{
              'border-[#3AA9D0] active': activeTab == category.tab,
              'border-black': activeTab != category.tab
            }"
          >
            <a
              v-on:click="activeTab = category.tab"
              class="inline-flex font-bold text-xl items-center rounded-lg w-full"
              aria-current="page"
            >
              {{ category.header }}
              <i class="ml-auto">
                <font-awesome-icon v-if="activeTab == category.tab" :icon="['fa', 'arrow-down']" />
                <font-awesome-icon v-else :icon="['fa', 'arrow-right']" />
              </i>
            </a>
            <p v-if="activeTab == category.tab" class="mt-5 text-black">
              {{ category.description }}
            </p>
          </li>
        </ul>
        <div class="p-6 text-medium text-gray-500 rounded-lg w-full">
          <img
            v-if="activeTab == 'firstTab'"
            src="../../assets/project-manamgement.svg"
            class="mx-auto"
          />
          <img
            v-if="activeTab == 'secondTab'"
            src="../../assets/dashboard-v1.png"
            class="mx-auto"
          />
          <img v-if="activeTab == 'thirdTab'" src="../../assets/dashboard-v2.png" class="mx-auto" />
          <img v-if="activeTab == 'fourthTab'" src="../../assets/dashboard.svg" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Category from '@/components/Frontend/Category.vue'
// Import Swiper Vue.js components with style
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref } from 'vue'
let activeTab = ref('firstTab')

const props = defineProps({
  categories: Array
})
</script>
