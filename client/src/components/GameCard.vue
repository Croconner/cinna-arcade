<template>
  <div class="card">
    <img :src="game.background_image" class="card-img-top" :alt="game.name" />
    <div class="card-body">
      <p class="card-text">{{ game.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "game-card",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

.card {
  width: 18rem;
  margin: 5px;
}
.card-img-top{
  height: 90%;
  margin: auto;
}
.card-body{
  background-color: #333333;
}

.card-text{
  color:#efefef;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 5px;
}

</style>
