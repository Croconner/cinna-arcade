<template>
  <div>
    <h1>hello</h1>
    <game-list />
  </div>
</template>

<script>
// import StoreService from "@/services/StoreService.js";
import GameList from "@/components/GameList.vue";

export default {
  components: { GameList },
};
</script>

<style scoped>
#carouselExampleIndicators {
    background-color: #f8f9fa;
  }
  
  /* Adjust the image aspect ratio */
  .carousel-item img {
    object-fit: cover;
    height: 400px; /* set the desired height */
  }
</style>
