<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search movies..."
      v-model="query"
      @keyup.enter="searchMovies"
    />
    <button v-if="query" @click="clearInput" class="cancel-btn">X</button>
    <button @click="searchMovies" class="search-btn">Search</button>
  </div>
</template>

<script>
export default {
  inject: ["state"],
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchMovies() {
      this.state.searchQuery = this.query;
      if (this.query.length !== 0) {
        this.state.movieLength = 0;
        this.state.currentPage = 1;
        this.$emit("search", this.query);
      }
    },
    clearInput() {
      this.query = "";
      this.searchMovies();
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  position: relative;
}

input {
  flex: 1;
  padding: 15px 15px;
  border: 1px solid darkgrey;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  background-color: #f7f7f7;
  position: relative;
}

input:focus {
  border: 1px solid #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
}

.cancel-btn {
  background-color: #f7f7f7;
  border: none;
  position: absolute;
  right: 110px;
  cursor: pointer;
}

.search-btn {
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-btn:hover {
  background-color: #0056b3;
}
</style>
