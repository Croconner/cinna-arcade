<template>
  <nav>
    <StoreNavigationBar />
  </nav>
  <div class="main-container">
    <div class="carousel">
      <photo-carousel :games="games"></photo-carousel>
    </div>
    <h1>Game List:</h1>
    <div class="game-list-container">
      <game-card v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
  <footer>
    <PaginationBar />
  </footer>
</template>

<script>
import StoreService from "@/services/StoreService";
import PhotoCarousel from "@/components/PhotoCarousel.vue";
import GameCard from "@/components/GameCard.vue";
import StoreNavigationBar from "@/components/store/StoreNavigationBar";

export default {
  name: "store-home-page",
  components: { PhotoCarousel, GameCard, StoreNavigationBar },

  data() {
    return {
      games: [],
    };
  },

  async created() {
    try {
      const response = await StoreService.getAllGames();
      this.games = response.data.results;
    } catch (error) {
      console.error(error);
    }
    // this.$store.commit("SET_GAMES", this.games);
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div.carousel {
  height: auto;
  width: 800px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.game-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;
}
</style>
