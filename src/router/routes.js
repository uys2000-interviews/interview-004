export default [
  {
    name: "MainLayout",
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
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
    ],
  },
  {
    name: "LoginView",
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
];
