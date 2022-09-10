import MainLayout from "../layouts/MainLayout.vue";
export default [
  {
    name: "MainLayout",
    path: "/",
    componet: MainLayout,
    children: [
      {
        name: "HameView",
        path: "",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },
];
