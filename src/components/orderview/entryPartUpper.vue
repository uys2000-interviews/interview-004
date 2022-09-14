<template>
  <div class="w-full overflow-auto">
    <div class="w-full min-w-[400px] grid grid-cols-4">
      <div class="bg-bg2 p-1">Company Name</div>
      <input
        class="bg-bg1 max-w-full rounded-sm mx-2 border-0 px-1"
        type="text"
        name="company-name"
        placeholder="Eti AŞ."
        v-model="orderStore.order.company_name"
      />
      <div class="bg-bg2 p-1">Data</div>
      <input
        name="date"
        class="bg-bg1 max-w-full rounded-sm mx-2 border-0 px-1 masked"
        type="text"
        v-mask="'##/##/####'"
        placeholder="DD/MM/YYYY"
        v-model="orderStore.order.date"
      />
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { useOrder } from "@/store/order";
export default {
  directives: { mask },
  data() {
    return {
      orderStore: useOrder(),
    };
  },
};
</script>
