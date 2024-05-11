<template>
    <div class="text-black">
      <div v-if="loaded">
        <Pie :data="storeData.chart" :options="options" />
      </div>
    </div>
</template>
  
  <script setup>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { ref, onMounted } from 'vue'
  ChartJS.register(ArcElement, Tooltip, Legend);
  let loaded = false;


  const props = defineProps({
    storeData: Object,
  })
  onMounted(() => {
    // https://vue-chartjs.org/guide/#chart-with-local-data
    // The problem with this approach is that Chart.js tries to render your chart and access the chart data synchronously
    loaded = true
  })
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  </script>
  