import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    data: [],
  },
  mutations: {
    addVar (state, obj) {
      //TODO
      state.data.push(obj);
    },
    removeVar (state, index) {
      //TODO
      state.data.
    },

    updateCount (state, value) {
      state.count = value;
    },
    increment (state) {
      state.count++;
    },
    decrement (state) {
      state.count--;
    }
  },
  actions: {},
  modules: {}
});
