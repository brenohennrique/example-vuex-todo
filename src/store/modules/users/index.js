import * as types from '../../mutations-types'

const state = {
  users: []
}

const mutations = {
  [types.ADD_USER] (state, user) {
    state.users.push(user)
  },

  [types.UPDATE_USER] (state, user) {
    for (let i = 0; i < state.users.length; i++) {
      if (state.users[i].id === user.id) {
        state.users[i] = user
      }
    }
  },

  [types.REMOVE_USER] (state, user) {
    for (let i = 0; i < state.users.length; i++) {
      if (state.users[i].id === user.id) {
        state.users.splice(i, 1)
      }
    }
  }
}

const actions = {
  addUser ({ commit }, user) {
    commit(types.ADD_USER, user)
  },

  updateUser ({ commit }, user) {
    commit(types.UPDATE_USER, user)
  },

  deleteUser ({ commit }, user) {
    commit(types.REMOVE_USER, user)
  }
}

export default {
  state,
  mutations,
  actions
}
