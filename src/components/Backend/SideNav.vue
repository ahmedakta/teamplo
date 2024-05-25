<template>

 <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

  <div id="sidebar-multi-level-sidebar" class="bg-white m-5 rounded-3xl  fixed z-1 pl-0 py-6 px-8 flex flex-col justify-between w-64 h-screen text-white top-0 left-0
  transform transition-transform -translate-x-full md:translate-x-0 
  " aria-label="Sidebar">
    <!-- Logo -->
    <div class="text-2xl text-black font-bold">
      <img alt="Vue logo" class="h-[4rem] logo px-10 py-2" src="@/assets/teamplo-logo-v1.png" />
      <!-- General -->
      <p class="text-gray-600 text-sm font-bold py-3">General <hr/></p>
      <!-- Navigation Links -->
      <nav id="sidenav" class="mt-6 text-[1.1rem] text-gray-500">
        <RouterLink to="/dashboard"           
                    :class="{ active: $route.path === '/dashboard' }"
                     class="block py-2 px-4 hover:bg-[#D6E6FD] hover:text-white">
          <font-awesome-icon :icon="['fas', 'circle-notch']" />
          Dashboard
        </RouterLink>
        <RouterLink to="/projects" 
        :class="{ active: $route.path === '/projects' }"
        class="block py-2 px-4 hover:bg-[#D6E6FD] hover:text-white">
          <font-awesome-icon :icon="['fa', 'diagram-project']" />
          Projects
        </RouterLink>
        <RouterLink to="/tasks" 
            :class="{ active: $route.path === '/tasks' }"
            class="block py-2 px-4 hover:bg-[#D6E6FD] hover:text-white">
          <font-awesome-icon :icon="['fa', 'bars-progress']" />
          Tasks
        </RouterLink>
        <RouterLink to="/events" 
        :class="{ active: $route.path === '/events' }"
        class="block py-2 px-4 hover:bg-[#D6E6FD] hover:text-white">
          <font-awesome-icon :icon="['fa', 'calendar']" />
          Events
        </RouterLink>
        <RouterLink to="/chats"
        :class="{ active: $route.path === '/chats' }"
        class="block py-2 px-4 hover:bg-[#D6E6FD] hover:text-white">
          <font-awesome-icon :icon="['fa', 'comment']" />
          Chats
        </RouterLink>
        <button @click="toggleButton" class="text-black px-4 py-2 rounded mb-4">Toggle Sidenav</button>

        <!-- Add more links as needed -->
      </nav>
    </div>
    <!-- Footer (Optional) -->
    <div class="mt-6 text-gray-500">
      <a
        href="#"
        class="block py-2  text-red-500 hover:bg-[#D6E6FD]"
        @click="logout()"
        v-if="userStore.id">
        <font-awesome-icon :icon="['fa', 'right-from-bracket']" />
        Logout
      </a>
      <p>Made By Teamplo</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useGeneralStore } from '@/stores/general'
const userStore = useUserStore()
const generalStore = useGeneralStore()
import { useRouter } from 'vue-router'
const router = useRouter()
import swal from 'sweetalert'


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
</script>

<style scoped>
.active{
  background-color: #D6E6FD;
 color: #1038FA;
 border-radius: 10px;
 font:bolder;
}</style>
