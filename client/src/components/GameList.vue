<template>
  <div>
    <h3>hello</h3>
    <PhotoCarousel :games="games"></PhotoCarousel>

    <h1>Game List:</h1>

    <ul>
      <li v-for="game in games" :key="game.id">
        {{ game.name }}
        {{ game.released }}
        <img :src="game.background_image" />
      </li>
    </ul>
  </div>
</template>

<script>
import StoreService from "@/services/StoreService";
import PhotoCarousel from "@/components/PhotoCarousel.vue";

export default {
  name: "GameList",
  components: { PhotoCarousel },

  data() {
    return {
      games: [],
    };
  },

  async created() {
    const response = await StoreService.getAllGames();
    this.games = response.data.results;
    this.$store.commit("SET_GAMES", this.games);
  },
};
</script>

<style scoped>
img {
  height: 200px;
}

li {
  list-style: none;
}
</style>
