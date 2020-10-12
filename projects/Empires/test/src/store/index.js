import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    allTodos: (state) => state.todos
  },
  state: {
    todos: [
      { id: 1, title: "todo 1" },
      { id: 2, title: "todo 2" },
      { id: 3, title: "todo 3" },
      { id: 4, title: "todo 4" },
    ]
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos)
  },
  actions: {
    async fetchTodos({ commit }) {
      console.log("adfasdfsa");
      commit("setTodos", [{ id: 1, title: "todo 1" },
      { id: 2, title: "todo 2" },])
    }
  },
  modules: {
  }
})
