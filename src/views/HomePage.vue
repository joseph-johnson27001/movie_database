<template>
  <div>
    <div class="search">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
// import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "HomePage",
  components: {
    // MovieGrid,
    SearchBar,
  },
};
</script>

<style scoped>
.search {
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
}
</style>
