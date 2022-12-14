import { defineStore } from "pinia";

export const useOrder = defineStore("order", {
  state: () => {
    return {
      orderList: [],
      order: {
        company_name: "",
        product_name: "",
        amount: 0,
        price: 0,
        date: "",
      },
    };
  },
  actions: {
    addOrder(value) {
      this.orderList.push(value);
    },
    removeOrder(value) {
      this.orderList.splice(value, 1);
    },
    setOrders(value) {
      this.orderList = value;
    },
  },
  getters: {
    getReversed: (state) => [...state.orderList].reverse(),
  },
});
