<template>
  <header class="py-4 absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-50">
    <div class="container mx-auto bg-white rounded-xl flex items-center justify-between">
      <!-- Logo on the left -->
      <div class="flex-shrink-0">
        <!-- <img src="logo.png" alt="Logo" class="h-8" /> -->
        <a href="/">
          <img alt="Vue logo" class="h-[4rem] logo px-10 py-2" src="@/assets/teamplo-logo-v1.png" />
        </a>
      </div>
      <!-- Navigation links in the center -->
      <nav class="bg-white hidden md:flex text-black rounded-2xl p-3 text-center border-black">
        <a
          class="font-semibold mx-4 hover:text-[#5dade2]"
          :class="{ active: $route.path === '/' }"
          href="/"
          >Home</a
        >
        <a
          class="mx-4 hover:text-[#5dade2]"
          :class="{ active: $route.path === '/about-us' }"
          href="/about-us"
          >About Us</a
        >
        <a
          class="mx-4 hover:text-[#5dade2]"
          :class="{ active: $route.path === '/features' }"
          href="/features"
          >Features</a
        >
        <a
          class="mx-4 hover:text-[#5dade2]"
          :class="{ active: $route.path === '/contact-us' }"
          href="/contact-us"
          >Contact Us</a
        >
        <a class="mx-4 hover:text-[#5dade2]" :class="{ active: $route.path === '/faq' }" href="/faq"
          >FAQ</a
        >
        <a href="#" class="mx-4 hover:text-[#5dade2]" @click="logout()" v-if="userStore.id"
          >logout</a
        >
      </nav>
      <!-- Login button on the right -->
      <div class="flex flex-shrink-0 text-center">
        <a href="/login" class="bg-white text-[#3aa9D0] py-2 px-4 rounded-xl" v-if="!userStore.id">
          Log in
        </a>
        <button
          v-if="!userStore.id"
          class="text-white ml-1 py-2 px-4 rounded bg-blue-500"
          @click="($event) => (generalStore.isLoginOpen = true)"
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
          <img
            :src="'./src/assets/' + userStore.image"
            alt=""
            class="border-2 border-gray-400 rounded-xl"
            width="40rem"
          />
        </div>
      </div>
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
/* header {
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
} */
</style>
