<template>
  <canvas ref="chart" class="w-full h-full" />
</template>

<script>
import Chart from "chart.js/auto";
export default {
  props: ["labels", "dataSets"],
  mounted() {
    new Chart(this.$refs.chart, {
      type: "polarArea",
      data: {
        labels: this.labels,
        datasets: this.dataSets,
      },
      responsive: true,
      options: {
        legend: {
          position: "top",
        },
        plugins: {
          title: {
            display: true,
            text: this.title,
          },
        },
      },
    });
  },
};
</script>
