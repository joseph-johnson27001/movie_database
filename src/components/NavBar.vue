<template>
  <nav>
    <div class="navigation-container">
      <div class="main-container">
        <ul class="nav-btn-container">
          <li @click="setActive('Home')">
            <a href="#" :class="{ active: activeItem === 'Home' }">Home</a>
          </li>
          <li @click="setActive('New Releases')">
            <a href="#" :class="{ active: activeItem === 'New Releases' }"
              >New Releases</a
            >
          </li>
          <li @click="setActive('Trending')">
            <a href="#" :class="{ active: activeItem === 'Trending' }"
              >Trending</a
            >
          </li>
        </ul>
        <p>YAY Movies!</p>
        <div></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeItem: "Home",
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #0d253f;
  color: white;
  padding: 10px 0;
}

.navigation-container {
  max-width: 1200px;
  margin: auto;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

ul {
  list-style-type: none;
  padding: 0;
}

.nav-btn-container {
  display: flex;
  margin-left: 10px;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
}

.active {
  color: gold;
}
</style>
