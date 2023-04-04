<template>
  <div>
    <StoreNavigationBar />
    <store-home-page />
  </div>
</template>


<script>
import StoreHomePage from "./StoreHomePageView";
import StoreNavigationBar from "@/components/store/StoreNavigationBar";
export default {
  components: { StoreHomePage, StoreNavigationBar },
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
