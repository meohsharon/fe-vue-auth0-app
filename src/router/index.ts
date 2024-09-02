import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";
import { topNavigation } from "@helpers/lovs";

const NotAllowed = () => import("@views/NotAllowed.vue");
const NotFoundPage = () => import("@views/NotFound.vue");
const Landing = () => import("@views/LandingPage.vue");

const staticRoutes = [
  {
    path: "/",
    name: "LandingPage",
    component: Landing,
  },
  {
    path: "/not-allowed",
    name: "NotAllowed",
    component: NotAllowed,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const dynamicRoutes = [];
for (const route of topNavigation) {
  const routeJson = {
    path: route.target,
    name: route.text,
    component: () => import(`@views/${route.name}.vue`),
    beforeEnter: authGuard,
  };
  dynamicRoutes.push(routeJson);
}

const routes = [...staticRoutes, ...dynamicRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
