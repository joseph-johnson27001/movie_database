<template>
  <nav>
    <div class="navigation-container">
      <div class="main-container">
        <ul class="nav-btn-container">
          <li>
            <router-link to="/" :class="{ active: isActive('Home') }"
              >Search</router-link
            >
          </li>
        </ul>
        <p>YAY Movies!</p>
        <div>
          <ul class="nav-btn-container">
            <li>
              <router-link
                to="/new-releases"
                :class="{ active: isActive('New Releases') }"
                >New Releases</router-link
              >
            </li>
            <li>
              <router-link
                to="/top-rated"
                :class="{ active: isActive('Top Rated') }"
                >Top Rated</router-link
              >
            </li>
            <li>
              <router-link
                to="/trending"
                :class="{ active: isActive('Trending') }"
                >Trending</router-link
              >
            </li>
            <li>
              <router-link
                to="/upcoming"
                :class="{ active: isActive('Upcoming') }"
                >Upcoming</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    isActive(item) {
      return this.$route.name === item;
    },
  },
};
</script>
<style scoped>
nav {
  background-color: #0d253f;
  color: white;
  padding: 10px 0;
  border-bottom: 1px solid white;
}

.navigation-container {
  max-width: 1200px;
  margin: auto;
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 15px;
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
