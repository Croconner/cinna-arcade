<template>
  <div>
    <StoreNavigationBar />
    <div class="main-container">
      <h1>Browse All Games</h1>
      <div class="game-list">
        <div class="game-card">
          <game-card
            v-for="game in paginatedGames"
            :key="game.id"
            :game="game"
          />
        </div>
      </div>
      <div class="pagination-bar">
        <pagination-bar
          :current-page="currentPage"
          :total-pages="totalPages"
          :on-change-page="handleChangePage"
          :max-pages-to-show="5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
import StoreService from "@/services/StoreService.js";
import StoreNavigationBar from "@/components/store/StoreNavigationBar";
import PaginationBar from "@/components/PaginationBar.vue";

export default {
  name: "BrowseGamesList",
  components: { GameCard, StoreNavigationBar, PaginationBar },
  data() {
    return {
      games: [],
      currentPage: parseInt(this.$route.params.page) || 1,
      gamesPerPage: 40,
      totalPages: 1,
    };
  },
  async created() {
    console.log("currentPage:", this.currentPage);
    await this.fetchGameData(this.currentPage);
  },
  computed: {
    paginatedGames() {
      const startIndex = (this.currentPage - 1) * this.gamesPerPage;
      return this.games.slice(startIndex, startIndex + this.gamesPerPage);
    },
  },
  methods: {
    async fetchGameData(page) {
      try {
        const response = await StoreService.getGamesByPageNumber(
          page,
          this.gamesPerPage
        );
        this.games = response.data.results;
        this.totalPages = Math.ceil(response.data.count / this.gamesPerPage);
      } catch (error) {
        console.error(error);
      }
    },
    handleChangePage(newPage) {
      console.log("newPage:", newPage);

      const maxPagesToShow = 5;
      let startPage = Math.max(1, newPage - Math.floor(maxPagesToShow / 2));
      let endPage = startPage + maxPagesToShow - 1;
      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
      this.currentPage = newPage;
      this.totalPagesToShow = [];
      for (let i = startPage; i <= endPage; i++) {
        this.totalPagesToShow.push(i);
      }
      this.fetchGameData(newPage);
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

.pagination-bar {
  justify-content: center;
}
</style>
