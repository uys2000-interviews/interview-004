<template>
  <template v-for="i in orderStore.orderList.length" :key="i">
    <div :class="i % 2 ? 'bg-bg2' : 'bg-bg1'" class="col-span-2">
      {{ orderStore.orderList[i - 1].name }}
    </div>
    <div :class="i % 2 ? 'bg-bg2' : 'bg-bg1'">
      {{ orderStore.orderList[i - 1].amount }}
    </div>
    <div :class="i % 2 ? 'bg-bg2' : 'bg-bg1'">
      {{ orderStore.orderList[i - 1].price }}
    </div>
    <button :class="i % 2 ? 'bg-bg2' : 'bg-bg1'">Remove</button>
  </template>
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
