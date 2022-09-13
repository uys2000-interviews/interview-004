import { defineStore } from "pinia";

export const useEx = defineStore("ex", {
  state: () => {
    return {
      ex: 0,
    };
  },
  actions: {
    exFunc(value) {
      this.ex = value;
    },
  },
  getters: {
    doubleCount: (state) => state.ex,
  },
});
