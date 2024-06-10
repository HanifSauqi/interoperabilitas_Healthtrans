import { createRouter, createWebHistory } from "vue-router";

import Wrapper from "../views/Wrapper.vue";
import Ambulans from "../views/Ambulans.vue";
import PertolonganPertama from "../views/PertolonganPertama.vue";
import Riwayat from "../views/Riwayat.vue";
import Settings from "../views/Settings.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue";



const routes = [
  {
    path: "/",
    redirect: "/ambulans"
  },
  {
    path: "/",
    component: Wrapper,
    children: [
      {
        path: "/ambulans",
        component: Ambulans,
      },
      {
        path: "/pertolongan-pertama",
        component: PertolonganPertama,
      },
      {
        path: "/riwayat",
        component: Riwayat,
      },
      {
        path: "/settings",
        component: Settings,
      },
    ],
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/register",
    component: register,
  },

];

const router = Router();
export default router;

function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
