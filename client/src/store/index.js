import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      games: [],
    }
  },
  mutations: {
    SET_GAMES(state, payload){
        state.games=payload;
    },
  }
})

createApp(App).use(store).mount('#app')
