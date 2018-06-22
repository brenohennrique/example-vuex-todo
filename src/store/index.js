import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'

import users from './modules/users'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    users
  }
})

Vue.use(VuexI18n.plugin, store)

export default store
