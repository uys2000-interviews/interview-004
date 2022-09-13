import { defineStore } from "pinia";

export const useMain = defineStore("page", {
  state: () => {
    return {
      isLogged: false,
      //pageNames comes from router/routes
      page: "DashView",
      pages: [
        {
          icon: "home",
          text: "Dashboard",
          value: "DashView",
        },
        {
          icon: "list",
          text: "Order",
          value: "OrderView",
        },
      ],
      user: {
        user_d: "",
        username: "",
        password: "",
        mail: "",
        created_on: "",
        last_login: "",
      },
    };
  },
  actions: {
    setUser(value) {
      this.user = value;
    },
    setPage(value) {
      this.page = value;
    },
  },
  getters: {
    getPage: (state) => (state.isLogged ? this.page : "LoginView"),
  },
});
