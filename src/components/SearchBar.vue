<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search movies..."
      v-model="query"
      @keyup.enter="searchMovies"
    />
    <button @click="searchMovies">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchMovies() {
      if (this.query.length !== 0) {
        this.$emit("search", this.query);
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}

input {
  flex: 1;
  padding: 15px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

input:focus {
  border: 1px solid #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
}

button {
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>
