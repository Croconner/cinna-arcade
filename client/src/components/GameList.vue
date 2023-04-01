<template>
  <h3>hello</h3>
  <photo-carousel :games="games.results"></photo-carousel>

  <h1>Game List:</h1>

  <ul>
    <li v-for="game in games.results" :key="game.id">
      {{ game.name }}
      {{ game.released }}
      <img :src="game.background_image" />
    </li>
  </ul>
</template>

<script>
import StoreService from "@/services/StoreService";
import PhotoCarousel from "@/components/PhotoCarousel.vue";

export default {
  name: "game-list",
  components: { PhotoCarousel },

  data() {
    return {
      games: [],
    };
  },

  created() {
    StoreService.getAllGames().then((response) => {
      this.games = response.data;
      this.$store.commit("SET_GAMES", this.games);
    });
  },
};
</script>

<style>
img {
  height: 200px;
}

li {
  list-style: none;
}
</style>
