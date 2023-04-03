<template>
  <nav class="navigation">
    <!-- Current logo for CinnaArcade site -->
    <div class="logoContainer">
      <router-link :to="{ name: 'store' }">
        <img src="../assets/cinna-logo-temporary.png" alt="CinnaArcade logo" />
      </router-link>
    </div>
    <div class="buttonsContainer">
      <ul class="page-link-list">
        <li>
          <router-link id="store-page" :to="{ name: 'store' }"
            >Store</router-link
          >
        </li>
        <li>
          <router-link id="library-page" :to="{ name: 'library' }"
            >Library</router-link
          >
        </li>
        <li>
          <router-link id="library-page" :to="{ name: 'store' }"
            >Social</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
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
  /* flex: 1; */
}

.buttonsContainer {
  display: flex;
  flex: 10;
  flex-direction: row;
  justify-content: center;
}

.buttonsContainer ul li {
  list-style: none;
}

.page-link-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding-right: 100px;
}

.page-link-list li {
  margin: 0 10px;
  font-size: 24px;
  text-align: center;
}

.page-link-list li::before {
  content: "|";
  margin-right: 10px;
}

.page-link-list li:first-child::before {
  content: none;
}

.page-link-list li a:hover {
  text-decoration: underline;
}

</style>
