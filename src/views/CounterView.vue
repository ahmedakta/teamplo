<script setup>
import { useCounterStore } from './../stores/counter'

let counter = useCounterStore()
</script>
<template>
  <div>
    <h1>This is an counter page</h1>

    <h4 class="m-1 text-red">{{ counter.count }}</h4>
    <button @click="counter.increment">Add</button>
  </div>
</template>
