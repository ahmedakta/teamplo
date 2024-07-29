<template>
  <!-- Frontend Side Nav -->
  <section class="md:hidden" v-if="generalStore.isSideNavOpen">
    <div
      :class="{
        'translate-x-0': generalStore.isSideNavOpen,
        '-translate-x-full': !generalStore.isSideNavOpen
      }"
      class="fixed z-50 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out"
    >
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold">Menu</h2>
        <button
          @click="generalStore.isSideNavOpen = false"
          class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <!-- Navigation links in the center -->
      <nav
        class="bg-white flex flex-col md:flex text-black rounded-2xl p-3 text-center border-black"
      >
        <a
          class="px-4 py-2 mt-2 mr-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :class="{ 'bg-gray-200 active': $route.path === '/' }"
          href="/"
          >Home</a
        >
        <a
          class="px-4 py-2 mt-2 mr-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :class="{ 'bg-gray-200 active': $route.path === '/about-us' }"
          href="/about-us"
          >About Us</a
        >
        <a
          class="px-4 py-2 mt-2 mr-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :class="{ 'bg-gray-200 active': $route.path === '/features' }"
          href="/features"
          >Features</a
        >
        <div class="relative">
          <button
            @click="generalStore.openModal('topnavMenu')"
            class="items-center w-full px-4 py-2 mt-2 mr-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Use Cases
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="inline h-4 ml-1 transition-transform duration-200 transform"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            v-show="generalStore.currentModal == 'topnavMenu'"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-96"
          >
            <div class="px-5 text-center py-5 bg-white rounded-md shadow dark-mode:bg-gray-800">
              <a
                class="flex mx-auto px-4 py-2 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                href="#"
              >
                <img src="../../assets/usecases-company.svg" alt="Company 2" class="md:h-7 h-10" />
                <p class="text-center mt-auto mb-auto text-sm font-semibold pl-5">
                  Company managment
                </p>
              </a>
              <a
                class="flex mx-auto px-4 py-2 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                href="#"
              >
                <img src="../../assets/usecases-project.svg" alt="Company 2" class="md:h-7 h-10" />
                <p class="text-center mt-auto mb-auto text-sm font-semibold pl-5">
                  Project managment
                </p>
              </a>
              <a
                class="flex mx-auto px-4 py-2 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                href="#"
              >
                <img src="../../assets/usecases-tasks.svg" alt="Company 2" class="md:h-7 h-10" />
                <p class="text-center mt-auto mb-auto text-sm font-semibold pl-5">Task managment</p>
              </a>
            </div>
          </div>
        </div>
        <a
          class="px-4 py-2 mt-2 mr-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :class="{ 'bg-gray-200 active': $route.path === '/blogs' }"
          href="/blogs"
          >Blogs</a
        >
        <a
          class="px-4 py-2 mt-2 mr-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :class="{ 'bg-gray-200 active': $route.path === '/why-us' }"
          href="/why-us"
          >Why Us</a
        >
        <a
          class="px-4 py-2 mt-2 mr-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :class="{ 'bg-gray-200 active': $route.path === '/contact-us' }"
          href="/contact-us"
          >Contact Us</a
        >
        <a href="/login" class="bg-white text-[#3aa9D0] py-2 px-4 rounded-xl" v-if="!userStore.id">
          Log in
        </a>
        <button
          v-if="!userStore.id"
          class="text-white ml-1 py-2 px-4 rounded bg-[#3AA9D0]"
          @click="$event => (generalStore.isLoginOpen = true)"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
          Get Started
        </button>
        <!-- swithch languages -->
        <select class="text-[#3aa9D0] px-1" name="" id="">
          <option value="">EN</option>
          <option value="">TR</option>
          <option value="">AR</option>
        </select>
        <div v-if="userStore.id" class="px-4">
          <RouterLink
            :to="{
              name: 'backend.index'
            }"
          >
            <img
              :src="'./src/assets/' + userStore.image"
              alt=""
              class="border-2 border-gray-400 rounded-xl"
              width="40rem"
            />
          </RouterLink>
        </div>
        <a
          href="#"
          class="px-4 py-2 mt-2 mr-2 text-sm font-semibold text-red-600 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          @click="logout()"
          v-if="userStore.id"
        >
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
          Logout</a
        >
      </nav>
    </div>

    <div class="p-4">
      <!-- Main content goes here -->
    </div>
  </section>
</template>
<script setup>
import { useGeneralStore } from '@/stores/general'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const router = useRouter()
const generalStore = useGeneralStore()
</script>
