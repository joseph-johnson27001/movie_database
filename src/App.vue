<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.scrollToTop();
      }
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
  },
};
</script>

<style>
body {
  background-color: #f7f7f7;
  margin: 0;
  font-family: "Quicksand", sans-serif;
}

#app {
  color: #2c3e50;
}

main {
  max-width: 1200px;
  margin: 0px auto;
  min-height: 100vh;
  padding-bottom: 10px;
}
</style>
