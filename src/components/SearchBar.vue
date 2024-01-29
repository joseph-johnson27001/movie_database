<template>
  <div class="search-bar">
    <input type="text" placeholder="Search movies..." />
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
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
}

input:focus {
  border: 1px solid #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
}

button {
  padding: 12px 20px;
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
