import { createRouter, createWebHistory } from "vue-router";
import SearchPage from "../views/SearchPage.vue";
import NowPlayingPage from "../views/NowPlayingPage.vue";
import TrendingPage from "../views/TrendingPage.vue";
import TopRatedPage from "../views/TopRatedPage.vue";
import MoviePage from "../views/MoviePage.vue";
import UpcomingPage from "../views/UpcomingPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/now-playing",
  },
  {
    path: "/search",
    name: "Search",
    component: SearchPage,
  },
  {
    path: "/now-playing",
    name: "Now Playing",
    component: NowPlayingPage,
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
