<template>
  <nav>
    <div class="navigation-container">
      <div class="main-container">
        <button class="hamburger-btn" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-btn-container main-btn-container">
          <li>
            <router-link
              to="/new-releases"
              :class="{ active: isActive('New Releases') }"
              @click="clearSearchHistory"
              >New Releases</router-link
            >
          </li>
          <li>
            <router-link
              to="/top-rated"
              :class="{ active: isActive('Top Rated') }"
              @click="clearSearchHistory"
              >Top Rated</router-link
            >
          </li>
          <li>
            <router-link
              to="/trending"
              :class="{ active: isActive('Trending') }"
              @click="clearSearchHistory"
              >Trending</router-link
            >
          </li>
          <li>
            <router-link
              to="/upcoming"
              :class="{ active: isActive('Upcoming') }"
              @click="clearSearchHistory"
              >Upcoming</router-link
            >
          </li>
        </ul>

        <div class="nav-btn-container heading">
          <p class="site-title">YAY Movies!</p>
        </div>
        <div class="search-container">
          <ul class="nav-btn-container">
            <li class="search-btn" style="padding-right: 10px">
              <router-link to="/search" :class="{ active: isActive('Home') }"
                >Search 🔍</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="additional-btn-container" v-if="this.isMenuOpen">
        <ul class="additional-btn-list">
          <li>
            <router-link
              to="/new-releases"
              :class="{ active: isActive('New Releases') }"
              @click="clearSearchHistory"
              >New Releases</router-link
            >
          </li>
          <li>
            <router-link
              to="/top-rated"
              :class="{ active: isActive('Top Rated') }"
              @click="clearSearchHistory"
              >Top Rated</router-link
            >
          </li>
          <li>
            <router-link
              to="/trending"
              :class="{ active: isActive('Trending') }"
              @click="clearSearchHistory"
              >Trending</router-link
            >
          </li>
          <li>
            <router-link
              to="/upcoming"
              :class="{ active: isActive('Upcoming') }"
              @click="clearSearchHistory"
              >Upcoming</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  inject: ["state"],
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    isActive(item) {
      return this.$route.name === item;
    },
    clearSearchHistory() {
      this.state.searchQuery = "";
      this.state.currentPage = 1;
      this.state.apiLink = null;
      this.closeMenu();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
<style scoped>
nav {
  background-color: #0d253f;
  color: white;
  padding: 10px 0;
  text-align: center;
  border-radius: 5px;
}

.navigation-container {
  max-width: 1200px;
  margin: auto;
}

.additional-btn-container {
  display: none;
}

.additional-btn-list {
  display: flex;
  border-radius: 0px 5px 5px 0px;
  flex-direction: column;
}

.additional-btn-list li {
  padding-top: 20px;
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
  align-items: center;
}

.search-container {
  display: flex;
  justify-content: flex-end;
}

.site-title {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: gold;
}

.heading {
  justify-content: center;
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

.hamburger-btn {
  display: none;
}

.main-btn-container {
  margin-left: 10px;
}

@media screen and (max-width: 768px) {
  .nav-btn-container {
    margin-left: 0px;
  }

  li {
    margin-right: 0px;
  }
  .main-btn-container {
    display: none;
  }

  .additional-btn-container {
    display: block;
  }

  .hamburger-btn {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
  }

  .hamburger-btn span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
  }

  .hamburger-btn.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger-btn.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
