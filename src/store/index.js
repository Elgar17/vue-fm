import Vue from 'vue'
import Vuex from 'vuex'
import play from './play.js'
import style from './style.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  modules: {
    play,
    style
  }
})
