import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";

const NotAllowed = () => import("@views/NotAllowed.vue");
const NotFoundPage = () => import("@views/NotFound.vue");
const Landing = () => import("@views/LandingPage.vue");
const Home = () => import("@views/Home.vue");
const FileManager = () => import("@views/FileManager.vue");
const MyTree = () => import("@views/MyTree.vue");

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: "/file-manager",
    name: "FileManager",
    component: FileManager,
    beforeEnter: authGuard,
  },
  {
    path: "/my-tree",
    name: "MyTree",
    component: MyTree,
    beforeEnter: authGuard,
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
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
