import axios from '../../plugins/axios'
import { defineStore } from 'pinia'
import { useGeneralStore } from '@/stores/general'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: '',
    role_id: '',
    bio: '',
    image: ''
  }),
  actions: {
    async getTokens() {
      await axios.get('/sanctum/csrf-cookie')
    },

    async login(email, password) {
      // set loader to frontend
      const spinner = document.querySelector('.spinner')
      spinner.style.display = 'block'
      spinner.classList.add('animate-spin')

      await axios.post(
        '/login',
        {
          email: email,
          password: password
        },
        { withCredentials: true }
      )
      useGeneralStore().isLoading = false
      swal('Success', 'You Logged In Successfully')
    },

    async register(name, email, password, confirmPassword) {
      await axios.post('/register', {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      })
    },
    // this function to read user from server directly and set items to state var's.
    async getUser() {
      let res = await axios.get('/api/logged-in-user')
      // save user in local storage
      localStorage.setItem('user', JSON.stringify(res.data[0]))
      this.$state.id = res.data[0].id
      this.$state.name = res.data[0].name
      this.$state.bio = res.data[0].bio
      this.$state.role_id = res.data[0].role_id
      this.$state.image = res.data[0].image
    },

    // this function to read user from local storage and set items to state var's.
    userInfo() {
      let storedUserInfo = JSON.parse(localStorage.getItem('user'))
      if (storedUserInfo) {
        this.$state.id = storedUserInfo.id
        this.$state.name = storedUserInfo.name
        this.$state.bio = storedUserInfo.bio
        this.$state.image = storedUserInfo.image
        return 1
      }
      return false
    },
    hasPermission($permission) {
      // todo
    },
    async logout() {
      try {
        await axios.post('/logout')
        // clear user local storage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.resetUser()
      } catch (error) {
        console.log(error)
      }
    },

    resetUser() {
      this.$state.id = ''
      this.$state.name = ''
      this.$state.email = ''
      this.$state.bio = ''
      this.$state.image = ''
    }
  },
  persist: true
})
