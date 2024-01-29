<template>
  <div id="app">
    <NavBar />
    <div class="search">
      <SearchBar />
    </div>
    <main>
      <HomeView />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import HomeView from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SearchBar,
    HomeView,
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
  border-radius: 5px;
}

.search {
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
}
</style>
