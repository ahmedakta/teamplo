<template>

<!-- Button to toggle sidebar -->
<button
  data-drawer-target="sidebar-multi-level-sidebar"
  data-drawer-toggle="sidebar-multi-level-sidebar"
  aria-controls="sidebar-multi-level-sidebar"
  type="button"
  class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  @click="toggleSidebar"
>
  <span class="sr-only">Open sidebar</span>
  <svg
    class="w-2 h-2"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clip-rule="evenodd"
      fill-rule="evenodd"
      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    ></path>
  </svg>
</button>


<div  id="sidebar-multi-level-sidebar"
  class="bg-white m-5 rounded-3xl fixed z-1 py-6 flex flex-col justify-between w-64 h-screen text-white top-0 left-0 transform transition-transform -translate-x-full md:translate-x-0"
  aria-label="Sidebar">
  <!-- Logo -->
  <div class="text-2xl text-black font-bold mx-auto">
    <img alt="Vue logo" class="h-[4rem] logo px-10 py-2" src="@/assets/teamplo-logo-v1.png" />
    <!-- General -->
    <p class="text-gray-600 text-sm font-bold py-3">General <hr/></p>
    <!-- Navigation Links -->
    <nav id="sidenav" class="mt-6 text-[1.1rem] text-gray-500">
      <RouterLink
        to="/dashboard"
        :class="{ active: $route.path === '/dashboard' }"
        class="block py-2 px-4 hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
      >
        <font-awesome-icon :icon="['fas', 'circle-notch']" />
        Dashboard
      </RouterLink>
      <button
        @click="dropdownOpen = !dropdownOpen"
        class="block py-2 px-4 w-full text-left hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
        Users
      </button>
      <div v-show="dropdownOpen" class="pl-5">
        <RouterLink
          to="/link1"
          class="block py-2 px-4 hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
          @click="dropdownOpen = false"
        >
          <font-awesome-icon :icon="['fas', 'users']" />
          Users
        </RouterLink>
        <RouterLink
          to="/link2"
          class="block py-2 px-4 hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
          @click="dropdownOpen = false"
        >
          Employees
        </RouterLink>
        <RouterLink
          to="/link3"
          class="block py-2 px-4 hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
          @click="dropdownOpen = false"
        >
          <font-awesome-icon :icon="['fas', 'user-lock']" />
          Permissions
        </RouterLink>
      </div>
      <RouterLink
        to="/projects"
        :class="{ active: $route.path === '/projects' }"
        class="block py-2 hover:bg-[#D6E6FD] hover:rounded-xl px-4 hover:text-[#1038FA]"
      >
        <font-awesome-icon :icon="['fa', 'diagram-project']" />
        Projects
      </RouterLink>
      <RouterLink
        to="/tasks"
        :class="{ active: $route.path === '/tasks' }"
        class="block py-2 hover:bg-[#D6E6FD] hover:rounded-xl px-4 hover:text-[#1038FA]"
      >
        <font-awesome-icon :icon="['fas', 'users-rectangle']" />
        Departments
      </RouterLink>
      <!-- <RouterLink
        to="/tasks"
        :class="{ active: $route.path === '/tasks' }"
        class="block py-2 px-4 hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
      >
        <font-awesome-icon :icon="['fa', 'bars-progress']" />
        Tasks
      </RouterLink> -->
      <RouterLink
        to="/events"
        :class="{ active: $route.path === '/events' }"
        class="block py-2 px-4 hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
      >
        <font-awesome-icon :icon="['fa', 'calendar']" />
        Events
      </RouterLink>
      <RouterLink
        to="/chats"
        :class="{ active: $route.path === '/chats' }"
        class="block py-2 px-4 hover:bg-[#D6E6FD] hover:rounded-xl hover:text-[#1038FA]"
      >
        <font-awesome-icon :icon="['fa', 'comment']" />
        Chats
      </RouterLink>
      <button @click="toggleButton" class="text-black px-4 py-2 rounded mb-4 w-full md:hidden">Toggle Sidenav</button>
    </nav>
  </div>
  <!-- Footer (Optional) -->
  <div class="mt-6 text-gray-500">
    <RouterLink
      to="/tasks"
      :class="{ active: $route.path === '/tasks' }"
      class="block py-2 px-4 hover:bg-[#D6E6FD] hover:text-[#1038FA]"
    >
      <font-awesome-icon :icon="['fa', 'cog']" />
      Settings
    </RouterLink>
    <a
      href="#"
      class="block py-2 px-4 text-red-500 hover:bg-[#D6E6FD]"
      @click="logout()"
      v-if="userStore.id"
    >
      <font-awesome-icon :icon="['fa', 'right-from-bracket']" />
      Logout
    </a>
    <p class="">Made By Scritp</p>
  </div>
</div>

</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useGeneralStore } from '@/stores/general'
const userStore = useUserStore()
import { ref, onMounted } from 'vue'
const generalStore = useGeneralStore()
import { useRouter } from 'vue-router'
const router = useRouter()
import swal from 'sweetalert'
const dropdownOpen = ref(false)

// CLOSE THE SIDENAV
const sidenav = document.querySelector('#sidenav');

const toggleButton =  () => {
    sidenav.classList.toggle('-translate-x-full');
};

const logout = () => {

    swal({
    title: "Do you want to Logout?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Logout",
    denyButtonText: "Cancel"
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result) {
      try {  
        userStore.logout()
        router.push('/')
      } catch (error) {
        console.log(error)
      }
      swal("Logouted!", "", "success");
    } else if (result.isDenied) {
      swal("Logout Error", "", "info");
    }
  });
}
  // JavaScript to toggle sidebar visibility
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar-multi-level-sidebar');
    sidebar.classList.toggle('-translate-x-full');
  };

  // Check window width on load and toggle sidebar based on screen size
  window.addEventListener('load', () => {
    const sidebar = document.getElementById('sidebar-multi-level-sidebar');
    if (window.innerWidth >= 640) {
      sidebar.classList.remove('-translate-x-full');
    }
  });

  // Toggle sidebar when button is clicked
  const button = document.querySelector('[data-drawer-toggle="sidebar-multi-level-sidebar"]');
  if (button) {
    button.addEventListener('click', toggleSidebar);
  }
</script>

<style scoped>
.active{
  background-color: #D6E6FD;
 color: #1038FA;
 border-radius: 10px;
 font:bolder;
}</style>
