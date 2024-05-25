import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const useProjectStore = defineStore('task', {
  state: () => ({
    projects: []
  }),
  actions: {
    async fetchProjects() {
      try {
        const response = await axios.get('/api/projects', {
          withCredentials: true
        })
        this.projects = response.data
      } catch (error) {
        alert(error)
        console.error('Error fetching projects:'  + error)
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
