import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NewReleasesPage from "../views/NewReleasesPage.vue";
import TrendingPage from "../views/TrendingPage.vue";
import TopRatedPage from "../views/TopRatedPage.vue";
import MoviePage from "../views/MoviePage.vue";
import UpcomingPage from "../views/UpcomingPage";

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
  {
    path: "/top-rated",
    name: "Top Rated",
    component: TopRatedPage,
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: UpcomingPage,
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: MoviePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
