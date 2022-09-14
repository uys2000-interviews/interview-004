<template>
  <template v-for="i in orderStore.orderList.length" :key="i">
    <div :class="i % 2 ? 'bg-bg1' : 'bg-bg2'" class="col-span-2 p-1">
      {{ orderStore.orderList[i - 1].company_name }}
    </div>
    <div :class="i % 2 ? 'bg-bg1' : 'bg-bg2'" class="col-span-2 p-1">
      {{ orderStore.orderList[i - 1].product_name }}
    </div>
    <div :class="i % 2 ? 'bg-bg1' : 'bg-bg2'" class=" p-1">
      {{ orderStore.orderList[i - 1].amount }}
    </div>
    <div :class="i % 2 ? 'bg-bg1' : 'bg-bg2'" class=" p-1">
      {{ orderStore.orderList[i - 1].price }}
    </div>
    <div :class="i % 2 ? 'bg-bg1' : 'bg-bg2'" class=" p-1">
      {{ orderStore.orderList[i - 1].date }}
    </div>
    <button
      :disabled="disabled"
      :class="i % 2 ? 'bg-bg1' : 'bg-bg2'"
      @click="removeEvent(i)"
    >
      Remove
    </button>
  </template>
</template>

<script>
import { useOrder } from "@/store/order";
import { sendRemovedData } from "@/services/service";
export default {
  data() {
    return {
      disabled: false,
      orderStore: useOrder(),
    };
  },
  methods: {
    removeEvent: function (value) {
      this.disabled = true;
      sendRemovedData(value).then((res) => {
        this.disabled = false;
        if (res.data.body) this.orderStore.removeOrder(value - 1);
      });
    },
  },
};
</script>

