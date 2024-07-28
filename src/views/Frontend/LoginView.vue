<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="bg-white border-[1px] border-gray-200 max-w-md p-10 rounded-xl w-full space-y-8">
      <div>
        <RouterLink
          :to="{
            name: 'frontend.index'
          }"
        >
          <img class="mx-auto h-12 w-auto" src="@/assets/teamplo-logo-v1.png" alt="Company Logo" />
        </RouterLink>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-blue-500 hover:text-indigo-500"
            >start your 14-day free trial</a
          >
        </p>
      </div>
      <form @submit.prevent="login" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="email"
              :error="errors && errors.email ? errors.email[0] : ''"
              id="email-address"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <span class="text-red-600" v-if="errors?.email">{{ errors.email[0] }}</span>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              :error="errors && errors.password ? errors.password[0] : ''"
              id="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            <span class="text-red-600" v-if="errors?.password">{{ errors.password[0] }}</span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-blue-500 hover:text-indigo-500"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div>
          <button
            @click="$event => (generalStore.isLoading = true)"
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5dade2] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <font-awesome-icon
                v-if="!generalStore.isLoading"
                :icon="['fa', 'right-to-bracket']"
                class="h-5 w-5 text-blue-300 group-hover:text-blue-200"
              />
              <font-awesome-icon
                :icon="['fas', 'spinner']"
                class="spinner animate-spin h-5 w-5 text-blue-300 group-hover:text-blue-200"
                v-if="generalStore.isLoading && !errors"
              />
            </span>
            Sign in
          </button>
        </div>

        <div class="relative mt-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-gray-50 text-gray-500">OR</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            class="group relative w-full flex justify-center py-2 px-4 border-[1px] border-gray-200 text-sm font-medium rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <font-awesome-icon class="text-[#EA4335]" :icon="['fab', 'google']" />
            </span>
            Sign in with Google
          </button>
        </div>

        <div>
          <button
            type="button"
            class="group relative w-full flex justify-center py-2 px-4 border-[1px] border-gray-200 text-sm font-medium rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <font-awesome-icon class="text-blue-400" :icon="['fab', 'microsoft']" />
            </span>
            Sign in with Microsoft
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useGeneralStore } from '@/stores/general'
import { useUserStore } from '@/stores/user'
const generalStore = useGeneralStore()
const userStore = useUserStore()
import { useRouter } from 'vue-router'
const router = useRouter()
let email = ref(null)
let password = ref(null)
let errors = ref(null)

const login = async () => {
  errors.value = null

  try {
    await userStore.getTokens()
    await userStore.login(email.value, password.value)
    await userStore.getUser()
    if (userStore.role_id == 1) {
      router.push('dashboard')
    }
    if (userStore.role_id == 3) {
      router.push('content-creator/dashboard')
    }
    generalStore.isLoginOpen = false
  } catch (error) {
    errors.value = error.response.data.errors
    console.log(errors.value)
  }
}
</script>
