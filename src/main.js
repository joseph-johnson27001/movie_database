import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import state from "./store/state"; // Import your Vuex state

createApp(App)
  .use(router)
  .provide("state", state) // Provide the state to your components
  .mount("#app");
