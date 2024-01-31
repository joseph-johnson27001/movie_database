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
};
</script>

<style>
body {
  background-color: #f7f7f7;
  margin: 0;
  font-family: "Quicksand", sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}

main {
  max-width: 1200px;
  margin: 0px auto;
  min-height: 100vh;
}
</style>
