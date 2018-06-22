import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'

Vue.use(Vuex)

const store = new Vuex.Store({

})

Vue.use(VuexI18n.plugin, store)

export default store
