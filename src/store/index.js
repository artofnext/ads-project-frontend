import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    datas: [
      {
        name: 'Alpha',
        type: 'int',
        from: 0,
        to: 1000,
        index: 0,
      },
      {
        name: 'Beta',
        type: 'int',
        from: 0,
        to: 1000,
        index: 1,
      },
      {
        name: 'Gamma',
        type: 'int',
        from: 0,
        to: 1000,
        index: 2,
      },
      {
        name: 'Epsilon',
        type: 'int',
        from: 0,
        to: 1000,
        index: 3,
      },
    ],
  },
  mutations: {
    addVar (state) {
      //TODO
      state.datas.push({
        index: state.datas.length,
      });
    },
    removeVar (state, index) {
      //TODO
      state.datas.splice(index, 1);
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
