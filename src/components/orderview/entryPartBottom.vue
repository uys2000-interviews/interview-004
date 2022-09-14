<template>
  <div class="w-full overflow-auto">
    <div class="w-full grid grid-cols-5 min-w-[400px]">
      <div class="bg-bg2 p-1 col-span-2">Production Name</div>
      <div class="bg-bg2 p-1">Amount</div>
      <div class="bg-bg2 p-1">Price</div>
      <div class="bg-bg2 p-1"></div>
      <input
        class="bg-bg1 border-bg2 rounded-sm border col-span-2 max-w-full p-1"
        type="text"
        placeholder="Production Name"
        v-model="orderStore.order.product_name"
      />
      <input
        class="bg-bg1 border-bg2 rounded-sm border max-w-full p-1"
        type="number"
        placeholder="Amount"
        v-model="orderStore.order.amount"
      />
      <input
        type="number"
        class="bg-bg1 border-bg2 rounded-sm border max-w-full p-1"
        placeholder="Price"
        v-model="orderStore.order.price"
      />
      <button class="border border-bg2 rounded-sm" @click="addDataEvent">
        Add
      </button>
    </div>
  </div>
</template>

<script>
import { useOrder } from "@/store/order";
import { sendAddedData } from "@/services/service";
export default {
  data() {
    return {
      orderStore: useOrder(),
    };
  },
  methods: {
    errorEvent: function (err) {
      alert(`There is a error \nCan You Refresh Page\n ${err}`);
    },
    succesEvent: function () {
      this.orderStore.addOrder({ ...this.orderStore.order });
    },
    addDataEvent: function () {
      sendAddedData(this.orderStore.order)
        .then((res) =>
          res.data.body
            ? this.succesEvent()
            : this.errorEvent("Server Side Error")
        )
        .catch((err) => this.errorEvent(err));
    },
  },
};
</script>
