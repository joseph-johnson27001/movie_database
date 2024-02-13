import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import state from "./store/state";

createApp(App).use(router).provide("state", state).mount("#app");
