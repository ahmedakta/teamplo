import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),

  actions: {
    async increment() {
      this.count++
    }
  }
})
