<template>
  <div>
    <StoreNavigationBar />
    <div class="main-container">
      <h1>Browse All Games</h1>
      <div class="game-list">
        <div class="game-card" >
          <game-card v-for="game in games" :key="game.id" :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
import StoreService from "@/services/StoreService.js";
import StoreNavigationBar from "@/components/store/StoreNavigationBar";

export default {
  name: "BrowseGamesList",
  components: { GameCard, StoreNavigationBar },
  data() {
    return {
      games: [],
      currentPage: parseInt(this.page) || 1,
      totalPages: 1,
    };
  },
  async created() {
    const response = await StoreService.getAllGames();
    this.games = response.data.results;
    this.totalPages = Math.ceil(response.data.count / response.data.results.length);
  },
  watch: {
    page(newPage) {
      this.currentPage = parseInt(newPage) || 1;
    },
    currentPage(newPage) {
      this.$router.push({ name: "browseGames", params: { page: newPage } });
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;
}
</style>
