<template>
  <div class="text-black p-5">
    <div v-if="loaded">
      <Pie
        :data="storeData.departments_progress.chart"
        :options="options"
        palette="Soft"
        v-if="storeData.departments_progress"
      />
    </div>
  </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { onMounted } from 'vue'
ChartJS.register(ArcElement, Tooltip, Legend)
let loaded = false

const props = defineProps({
  storeData: Object
})
onMounted(() => {
  // https://vue-chartjs.org/guide/#chart-with-local-data
  // The problem with this approach is that Chart.js tries to render your chart and access the chart data synchronously
  loaded = true
})
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.label + ': ' + Math.round(tooltipItem.raw) + '%'
        }
      }
    },
    datalabels: {
      display: true,
      formatter: (value, context) => {
        return value === 0 ? '0%' : value + '%'
      }
    }
  }
}
// options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
</script>
