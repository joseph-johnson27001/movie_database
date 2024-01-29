<template>
  <nav>
    <div class="navigation-container">
      <div class="main-container">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">New Releases</a></li>
          <li><a href="#">Trending</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
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
  padding: 0px 10px;
  display: flex;
  justify-content: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
}
</style>
