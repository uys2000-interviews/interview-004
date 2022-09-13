<template>
  <div
    class="bg-bg2 flex flex-wrap justify-center md:justify-around lg:justify-between text-lg"
  >
    <div class="text-center sm:text-left">
      <label for="company-name" class="w-[150px] inline-block">
        Company Name
      </label>
      <input
        class="bg-bg1 max-w-full rounded-sm mx-2 border-0 px-2"
        type="text"
        name="company-name"
        placeholder="Eti AŞ."
        v-model="orderStore.order.company_name"
      />
    </div>
    <div class="text-center sm:text-left">
      <label for="date" class="w-[150px] inline-block">Date</label>
      <input
        name="date"
        class="bg-bg1 max-w-full rounded-sm mx-2 border-0 px-2 masked"
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
