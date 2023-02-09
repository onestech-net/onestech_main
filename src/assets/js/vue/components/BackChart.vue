<template lang="pug">
Radar(id="my-chart-id" :options="chartOptions" :data="chartData")
</template>

<script>
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, Filler } from 'chart.js'

ChartJS.register( Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, Filler )

export default {
  name: 'BackChart',
  components: { Radar },
  data() {
    return {
      chartData: {
        labels: [ 'PHP', 'Node.js', 'SQL', 'Linux', 'Laravel' ],
        datasets: [
          {
            data: [ 2, 2, 1, 1, 1],
            fill: true,
            backgroundColor: 'rgba(99, 139, 224, .1)',
            pointBackgroundColor: 'rgba(99, 139, 224, .9)',
            borderColor: 'rgba(99, 139, 224, .9)',
            borderWidth: 2
          }
        ]
      },
      chartOptions: {
        responsive: true,
        animation: false,
        maintainAspectRatio: false,
        plugins: {
          legend: false
        },
        scales: {
          r: {
            max: 5,
            min: 0,
            backgroundColor: '#fff',
            borderColor: '#000',
            grid: {
              color: '#ddd'
            },
            angleLines: {
              color: '#d3d3d3'
            },
            ticks: {
              stepSize: 1,
              backdropPadding: 2,
              font: {
                family: "'roboto', 'Helvetica', 'Arial', sans-serif",
                size: 16,
                color: '#333',
              }
            },
            pointLabels: {
              padding: 0,
              color: '#333',
              font: {
                family: "'roboto', 'Helvetica', 'Arial', sans-serif",
                size: 14,
              }
            }
          }
        }
      }
    }
  }
}
</script>
