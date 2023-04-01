<template>
  <nav class="navigation">
    <!-- Current logo for CinnaArcade site -->
    <div class="logoContainer">
        <router-link :to="{ name: 'store'}">
            <img src="../assets/cinna-logo-temporary.png" alt="CinnaArcade logo" />
        </router-link>
      </div>
      <div class="buttonsContainer">
        <ul>
          <li>
            <router-link :to="{ name: 'store'}">Store</router-link>
          </li>
        </ul>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
  height: 85px;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 3px 30px 0px 30px;
  background-color: #333333;
}
.logoContainer {
  flex: 1;
}

.buttonsContainer {
  display: flex;
  flex: 4;
  
}

.buttonsContainer ul li {
  list-style: none;
}

.buttonsContainer ul li {

}




</style>