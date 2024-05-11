<template>
  <div class="bg-white m-5 rounded-3xl text-white w-64 py-6 px-8 flex flex-col justify-between ">
    <!-- Logo -->
    <div class="text-2xl text-black font-bold">
      <img alt="Vue logo" class="h-[4rem] logo px-10 py-2" src="@/assets/teamplo-logo-v1.png" />
      <!-- General -->
      <p class="text-gray-600 text-sm font-bold py-3">General <hr/></p>
      <!-- Navigation Links -->
      <nav class="mt-6 text-[1.1rem] text-gray-500">
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
