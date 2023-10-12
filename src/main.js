import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";

// routes

const routes = [
  {
    path: "/",
    redirect: "/admin/dashboard",
    component: Admin,
    meta: { authAdmin: true },
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
    ],
  },
  {
    path: "/login",
    meta: { authAdmin: false },
    component: Auth,
    children: [
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
    ],
  },
  {
    path: "/internet-positive",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.authAdmin);
  const isAuthenticated = localStorage.getItem('dataUser');

  if (requiresAuth && !isAuthenticated) {
    next('/internet-positive');
  } else {
    next();
  }
});

createApp(App).use(router).mount("#app");
