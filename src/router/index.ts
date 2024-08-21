import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";

const NotAllowed = () => import("@views/NotAllowed.vue");
const NotFoundPage = () => import("@views/NotFound.vue");
const Landing = () => import("@views/LandingPage.vue");
const Home = () => import("@views/Home.vue");
const FileManagement = () => import("@views/FileManagement.vue");
const StoryTelling = () => import("@views/StoryTelling.vue");
const MapModal = () => import("@components/maps/LeafletMap.vue");

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
    path: "/play",
    name: "Lets Play",
    component: StoryTelling,
    beforeEnter: authGuard,
  },
  {
    path: "/ipfs",
    name: "P2P File Management",
    component: FileManagement,
    beforeEnter: authGuard,
  },
  // {
  //   path: "/map",
  //   name: "MapModal",
  //   component: MapModal,
  //   beforeEnter: authGuard,
  // },
  {
    path: "/not-allowed",
    name: "Not Allowed",
    component: NotAllowed,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFoundPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
