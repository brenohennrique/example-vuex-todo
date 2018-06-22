import * as types from '../../mutations-types'

const state = {
  todos: []
}

const mutations = {
  [types.ADD_TODO] (state, todo) {
    state.todos.push(todo)
  },

  [types.UPDATE_TODO] (state, todo) {
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i].id === todo.id) {
        state.todos[i] = todo
      }
    }
  },

  [types.REMOVE_TODO] (state, todo) {
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i].id === todo.id) {
        state.todos.splice(i, 1)
      }
    }
  }
}

const actions = {
  addTodo ({ commit }, todo) {
    commit(types.ADD_TODO, todo)
  },

  updateTodo ({ commit }, todo) {
    commit(types.UPDATE_TODO, todo)
  },

  deleteTodo ({ commit }, todo) {
    commit(types.REMOVE_TODO, todo)
  }
}

export default {
  state,
  mutations,
  actions
}
