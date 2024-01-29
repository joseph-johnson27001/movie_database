<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">New Releases</a></li>
      <!-- Add more navigation links as needed -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Add your navbar styling here */
nav {
  background-color: #333;
  color: white;
  padding: 10px 0;
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
