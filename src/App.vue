<template>
  <div id="app">
    <NavBar />
    <main>
      <HomeView />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HomeView from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HomeView,
  },
};
</script>

<style>
body {
  background-color: #f7f7f7;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}

p,
li,
h1,
h2,
h3 {
  color: white !important;
}

strong {
  color: #2c3e50;
}

main {
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  min-height: 100vh;
}
</style>
