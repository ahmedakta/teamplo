import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: []
  }),
  actions: {
    async fetchTasks() {
      try {
        const response = await axios.get('/api/tasks', {
          withCredentials: true
        })
        this.tasks = response.data
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    },
    async getTokens() {
      await axios.get('/sanctum/csrf-cookie')
    },
    async deleteTask(task) {
      try {
        const response = await axios.post('/api/tasks/delete/' + task.id)
        this.tasks = response.data
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    }
  }
})
