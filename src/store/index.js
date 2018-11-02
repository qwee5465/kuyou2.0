import Vue from 'vue'
import Vuex from 'vuex'

import siteInfo from './siteInfo/index'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    siteInfo
  }
})
