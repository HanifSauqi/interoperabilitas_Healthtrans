import { createRouter, createWebHistory } from "vue-router";

import Wrapper from "../views/User/Wrapper.vue";
import Ambulans from "../views/User/Ambulans.vue";
import PertolonganPertama from "../views/User/PertolonganPertama.vue";
import Riwayat from "../views/User/Riwayat.vue";
import Settings from "../views/User/Settings.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue";
import adminambulans from "../views/Admin/Adminambulans.vue";
import WrapperAdmin from "../views/Admin/Wrapperadmin.vue";
import AdminPertolonganPertama from "../views/Admin/AdminPertolonganPertama.vue";
import CreateAmbulans from "../views/Admin/CreateAmbulans.vue";
import EditAmbulans from "../views/Admin/EditAmbulans.vue";
import CreatePertolonganPertama from "../views/Admin/CreatePertolonganPertama.vue";
import AdminRumahSakit from "../views/Admin/AdminRumahSakit.vue";
import CreateRumahSakit from "../views/Admin/CreateRumahSakit.vue";
import EditRumahSakit from "../views/Admin/EditRumahSakit.vue";
import AdminPetugas from "../views/Admin/AdminPetugas.vue";
import CreatePetugas from "../views/Admin/CreatePetugas.vue";
import EditPetugas from "../views/Admin/EditPetugas.vue";

const userRoutes = [
  {
    path: "/",
    redirect: "/login",
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

const adminRoutes = [
  {
    path: "/admin",
    redirect: "/admin/ambulans",
    component: WrapperAdmin,
    children: [
      {
        path: "ambulans",
        component: adminambulans,
      },
      {
        path: "pertolongan-pertama",
        component: AdminPertolonganPertama,
      },
      {
        path: "create-ambulans",
        component: CreateAmbulans,
      },
      {
        path: "edit-ambulans/:id",
        component: EditAmbulans,
      },
      {
        path: "create-pertolongan-pertama",
        component: CreatePertolonganPertama,
      },
      {
        path: "rumah-sakit",
        component: AdminRumahSakit,
      },
      {
        path: "create-rumah-sakit",
        component: CreateRumahSakit,
      },
      {
        path: "edit-rumah-sakit/:id",
        component: EditRumahSakit,
      },
      {
        path: "petugas",
        component: AdminPetugas,
      },
      {
        path: "create-petugas",
        component: CreatePetugas,
      },
      {
        path: "edit-petugas/:id",
        component: EditPetugas,
      }
      // tambahkan rute admin lainnya di sini
    ],
  },
];

const routes = [...userRoutes, ...adminRoutes];

const router = Router();
export default router;

function Router() {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}