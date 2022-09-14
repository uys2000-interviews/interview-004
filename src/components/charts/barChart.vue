<template>
  <canvas ref="chart" class="w-full h-full" />
</template>
<script>
import Chart from "chart.js/auto";
export default {
  props: ["labels", "datasets", "title"],
  data() {
    this.cart = null;
    return {
      options: {},
    };
  },
  methods: {
    createChart: function () {
      this.chart = new Chart(this.$refs.chart, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: this.option,
      });
    },
  },
  mounted() {
    this.createChart();
  },
  watch: {
    datasets() {
      this.chart.update();
    },
  },
};
</script>
