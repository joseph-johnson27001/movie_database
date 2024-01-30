import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NewReleasesPage from "../views/NewReleasesPage.vue";
import TrendingPage from "../views/TrendingPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/new-releases",
    name: "New Releases",
    component: NewReleasesPage,
  },
  {
    path: "/trending",
    name: "Trending",
    component: TrendingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
