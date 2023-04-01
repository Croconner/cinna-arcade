<template>
    <div class="carousel" id="carouselExampleControls">
      <div class="carousel-inner">
        <div
          v-for="{game, index} in games"
          :key="game.id"
          :class="{ active: currentIndex === index }"
          class="carousel-item"
        >
          <img
            :src="game.background_image"
            class="d-block w-100"
            :alt="game.name"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <ol class="carousel-indicators">
        <li
          v-for="{game, index} in games"
          :key="game.id"
          :data-bs-target="carouselExampleControls"
          :data-bs-slide-to="index"
          :class="{ active: currentIndex === index }"
        ></li>
      </ol>
    </div>
  </template>
  
  <script>
  import { Carousel } from "bootstrap";
  import "bootstrap/dist/js/bootstrap.bundle";
  
  export default {
    name: "photo-carousel",
    props: {
      games: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    mounted() {
      new Carousel(document.querySelector("#carouselExampleControls"));
      this.initCarousel();
    },
    methods: {
      initCarousel() {
        // Update the carousel indicators count based on the number of slides
        const carouselIndicators = document.querySelectorAll(
          ".carousel-indicators li"
        );
        carouselIndicators.forEach((indicator, index) => {
          if (index >= this.games.results.length) {
            indicator.style.display = "none";
          }
        });
        // Update the carousel picture count based on the number of slides
        const carouselPictureCount = document.querySelector(
          ".carousel-picture-count"
        );
        if (carouselPictureCount) {
          carouselPictureCount.textContent = this.games.results.length;
        }
      },
    },
  };
  </script>

<style>
#carouselExampleIndicators {
  background-color: #f8f9fa;
}

/* Adjust the image aspect ratio */
.carousel-item img {
  object-fit: cover;
  height: 400px; /* set the desired height */
}
</style>