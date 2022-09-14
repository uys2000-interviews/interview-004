<template>
  <div class="w-full max-w-[600px] max-h-full p-4 m-auto">
    <bar-chart
      v-if="orderStore.orderList.length > 1"
      title="General Information"
      :labels="labels"
      :datasets="datasets"
    />
  </div>
</template>

<script>
import barChart from "@/components/charts/barChart.vue";
import { useOrder } from "@/store/order";
import { getCompanies, getProductions } from "@/services/dashboard";
getCompanies, getProductions;
export default {
  name: "HomeView",
  components: { barChart },
  data() {
    return {
      labels: ["Companies", "Production Types"],
      orderStore: useOrder(),
    };
  },
  computed: {
    datasets: function () {
      return [
        {
          label: "data",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
          ],
          data: [
            getCompanies(this.orderStore.orderList),
            getProductions(this.orderStore.orderList),
          ],
          borderWidth: 1,
        },
      ];
    },
  },
};
</script>
