import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";

const NotAllowed = () => import("@views/NotAllowed.vue");
const NotFoundPage = () => import("@views/NotFound.vue");
const Landing = () => import("@views/LandingPage.vue");
const Home = () => import("@views/Home.vue");
const Profile = () => import("@views/Profile.vue");
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
    path: "/story",
    name: "StoryTelling",
    component: StoryTelling,
    beforeEnter: authGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
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
