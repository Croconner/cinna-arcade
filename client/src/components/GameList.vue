<template>
  <h1>Game List: </h1>

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

export default {
  name: "game-list",
  data() {
    return {
      games: [],
      currentGame: 'Test',
    };
  },

  created() {
    StoreService.getAllGames().then((response) => {
      this.games = response.data;
      this.$store.commit("SET_GAMES", this.games)
    });
  },
};
</script>

<style>
img {
  height: 200px;
}

</style>
