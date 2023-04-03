<template>
  <div class="main-container">
    <div class="carousel">
      <photo-carousel :games="games"></photo-carousel>
    </div>

    <h1>Game List:</h1>
    <div class="game-list-container">
      <ul>
        <li v-for="game in games" :key="game.id">
          <img :src="game.background_image" />
          <p>{{ game.name }}</p>
        </li>
      </ul>
    </div>
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
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 200px;
}
div.carousel {
  height: auto;
  width: 800px;
  margin-bottom: 15px;
  margin-top: 15px;
  /* background-color: #f8f9fa; */
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

li {
  list-style: none;
  width: 19%;
  margin: 1%;
  padding: 10px;
  border: 1px solid black;
}

.game-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
}

img {
  object-fit: cover;
  height: 100px; /* set the desired height */
  width: 100px;
  /* border-radius: 50px; */
}
</style>
