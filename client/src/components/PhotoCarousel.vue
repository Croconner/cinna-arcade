<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(game, index) in games"
        :key="game.id"
        :data-bs-target="'#carouselExampleIndicators'"
        :data-bs-slide-to="index"
        :class="{ active: currentIndex === index }"
        @click="setIndex(index)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(game, index) in games"
        :key="game.id"
        :class="{ active: currentIndex === index }"
        class="carousel-item"
      >
        <img
          :src="game.background_image"
          class="d-block w-100"
          :alt="game.name"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>{{ game.name }}</h1>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// import { Carousel } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import debounce from 'lodash/debounce'

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
    this.initCarousel();
    // new Carousel(document.querySelector("#carouselExampleControls"));
  },
  methods: {
    initCarousel() {
      // Update the carousel indicators count based on the number of slides
      const carouselIndicators = document.querySelectorAll(
        ".carousel-indicators li"
      );
      const numIndicators = carouselIndicators.length;
      if (numIndicators < this.games.length) {
        for (let i = numIndicators; i < this.games.length; i++) {
          const newIndicator = document.createElement("li");
          newIndicator.setAttribute(
            "data-bs-target",
            "#carouselExampleControls"
          );
          newIndicator.setAttribute("data-bs-slide-to", i);
          carouselIndicators[0].parentNode.appendChild(newIndicator);
        }
      } else if (numIndicators > this.games.length) {
        for (let i = this.games.length; i < numIndicators; i++) {
          carouselIndicators[i].style.display = "none";
        }
      }
    },
    // incrementIndex() {
    //   this.currentIndex = (this.currentIndex + 1) % this.games.length;
    // },
    // decrementIndex() {
    //   if (this.currentIndex === 0) {
    //     this.currentIndex = this.games.length - 1;
    //   } else {
    //     this.currentIndex--;
    //   }
    // },
    // setIndex(index) {
    //   this.currentIndex = index;
    // },
    setIndex: debounce(function(index) {
      this.currentIndex = index;
    }, 500),
  },
};
</script>

<style scoped>
#carouselExampleIndicators {
  /* background-color: #333333; */
  border-radius: 50px;
}

/* Adjust the image aspect ratio */
.carousel-item img {
  object-fit: cover;
  height: 400px; /* set the desired height */
  border-radius: 50px;
}

.carousel-caption{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
}


.carousel-indicators li {
  display: inline-block;
}

#carouselExampleIndicators .carousel-indicators {
  bottom: -40px;
}

#carouselExampleIndicators .carousel-control-prev {
  left: -80px;
}
#carouselExampleIndicators .carousel-control-next {
  right: -80px;
}

</style>
