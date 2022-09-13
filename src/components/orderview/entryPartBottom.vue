<template>
  <input
    class="bg-bg1 border-bg2 rounded-sm border col-span-2 max-w-full"
    type="text"
    placeholder="Production Name"
    v-model="orderStore.order.product_name"
  />
  <input
    class="bg-bg1 border-bg2 rounded-sm border max-w-full"
    type="number"
    placeholder="Amount"
    v-model="orderStore.order.amount"
  />
  <input
    type="number"
    class="bg-bg1 border-bg2 rounded-sm border max-w-full"
    placeholder="Price"
    v-model="orderStore.order.price"
  />
  <button class="border border-bg2 rounded-sm">Add</button>
</template>

<script>
  import { useOrder } from "@/store/order";
  export default {
    data() {
      return {
        orderStore: useOrder(),
      };
    },
  };
  </script>