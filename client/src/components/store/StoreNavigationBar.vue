<template>
    <nav class="navigation">
      <div class="buttonsContainer">
        <ul class="page-link-list">
          <li>
            <router-link id="store-page" :to="{ name: 'store' }"
              >Discover</router-link
            >
          </li>
          <li>
            <router-link id="library-page" :to="{ name: 'browseGames' }"
              >Browse Games</router-link
            >
          </li>
          <!-- <li>
            <router-link id="library-page" :to="{ name: 'store' }"
              >Social</router-link
            >
          </li> -->
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "StoreNavigationBar",
  };
  </script>
  
  <style scoped>
  img {
    height: 85px;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    padding: 3px 30px 0px 30px;
    background-color: #800020;
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
    color: #efefef;
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
    font-size: 16px;
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

  nav a.router-link-exact-active {
  color: #efefef;
  text-decoration: underline;
}
  
  </style>
  