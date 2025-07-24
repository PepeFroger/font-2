import Details from "@/pages/Details.vue";
import Favorite from "@/pages/Favorite.vue";
import Search from "@/pages/Search.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Search,
  },
  {
    path: "/my-movies",
    component: Favorite,
  },
  {
    path: "/:id",
    component: Details,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
