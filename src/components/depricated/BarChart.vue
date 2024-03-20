<template v-if="chartData">
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
const props = defineProps({
  datasets: {
    type: Array,
    required: true
  }
})
import { reactive } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = reactive({
  datasets: props.datasets
})
const chartOptions = reactive({
  responsive: true,
  scales: {
    x: {
      type: 'linear',
      ticks: {
        callback: function (value) {
          let a = new Date(value)
          return (
            a.getDate() +
            ' May ' +
            (a.getHours() > 10 ? a.getHours() : `0${a.getHours()}`) +
            ':' +
            (a.getMinutes() > 10 ? a.getMinutes() : `0${a.getMinutes()}`)
          )
        }
      },
      startAtZero: true
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title: function (tooltipItems) {
          let tmp = parseInt(tooltipItems[0].label.split('.').join(''))
          let a = new Date(tmp)
          return (
            a.getDate() +
            ' May ' +
            (a.getHours() > 10 ? a.getHours() : `0${a.getHours()}`) +
            ':' +
            (a.getMinutes() > 10 ? a.getMinutes() : `0${a.getMinutes()}`)
          )
        },
        label: function (context) {
          let label = context.dataset.label || ''

          if (label) {
            label += ' Points: '
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y
          }
          return label
        }
      }
    }
  }
})
</script>
