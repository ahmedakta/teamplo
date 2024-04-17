<template>
  <header class="flex items-center">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
    <div class="flex">
      <button
        v-if="!userStore.id"
        class="items-center w-[145px] bg-green-500 text-white border rounded-md px-5 py-[6px]"
        @click="($event) => (generalStore.isLoginOpen = true)"
      >
        <span class="mx-4 font-medium text-[15px]">Log in</span>
      </button>
      <button
        class="items-center w-[155px] bg-green-500 text-white border rounded-md px-3 py-[6px]"
        @click="($event) => isLoggedIn('upload')"
      >
        <span class="mx-4 font-medium text-[15px]">Add Task</span>
      </button>
      <!-- <a href="#" @click="swal('Hi', 'success', 'success')">Alert</a> -->
      <a href="#" @click="logout()" v-if="userStore.id">logout</a>
      <a href="" v-if="userStore.id">
        <img
          width="33"
          class="rounded-full"
          :src="'http://127.0.0.1:8000/' + `${userStore.image}`"
        />
        <!-- TODO CLEANT THE FILE LOGIC HERE -->
      </a>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useGeneralStore } from '@/stores/general'
const userStore = useUserStore()
const generalStore = useGeneralStore()
import { useRouter } from 'vue-router'
const router = useRouter()

const isLoggedIn = (redirect) => {
  let storedUserInfo = JSON.parse(localStorage.getItem('user'))
  if (storedUserInfo) {
    if (redirect) {
      router.push(redirect)
    }
  } else {
    generalStore.isLoginOpen = true
  }
}

const logout = () => {
  try {
    userStore.logout()
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
