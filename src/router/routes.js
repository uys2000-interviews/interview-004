export default [
  {
    name: "HomeLayout", // in This Layout Side Menu is Same for childrens
    path: "",
    component: () => import("../layouts/HomeLayout.vue"),
    children: [
      {
        name: "DashView",
        path: "dash",
        component: () => import("../views/HomeView.vue"),
      },
      {
        name: "OrderView",
        path: "order",
        component: () => import("../views/OrderView.vue"),
      },
      {
        name: "LogoutView",
        path: "",
        component: () => import("../views/LogoutView.vue"),
      },
    ],
  },
  {
    name: "LoginView",
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
];
