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
      },
      {
        name: 'Beta',
        type: 'int',
        from: 0,
        to: 1000,
      },
      {
        name: 'Gamma',
        type: 'int',
        from: 0,
        to: 1000,
      },
      {
        name: 'Epsilon',
        type: 'int',
        from: 0,
        to: 1000,
      },
    ],
  },
  mutations: {
    addVar (state) {
      //TODO
      state.datas.push({
        obj: 'obj',
        index: 1,
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
