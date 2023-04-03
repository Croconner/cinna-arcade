<template>
  <nav>
    <navigation-bar />
  </nav>
  <router-view/>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default{
  components: {
    NavigationBar,
  }
}
</script>

<style>
#app {
  font-family:'Orbitron', Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #EFEFEF;
  background-color: #800020;

}

html {
  background-color: #800020;
}

nav {
  /* padding: 30px; */
}

nav a {
  font-weight: bold;
  color: #efefef;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #800020;
  text-decoration: underline;
}
</style>
