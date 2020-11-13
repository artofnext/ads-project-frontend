import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const devMode = true;

export default new Vuex.Store({
  state: {
    count: 0,
    // mocked object
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
    dataTypes: [
      'Str',
      'Int',
      'Bool',
    ],
    activeElement: NaN
  },
  mutations: {
    addVar (state) {
      //TODO
      state.datas.push({
        name: '',
        type: '',
        from: 0,
        to: 10,
        index: state.datas.length,
      });
      state.activeElement = state.datas.length - 1;
      if (devMode) console.log('New element added');
    },
    removeVar (state, index) {
      //TODO
      state.datas.splice(index, 1);
      if (devMode) console.log('Element ' + index + ' deleted');
    },

    updateActiveElement (state, index) {
      state.activeElement = index;
      if (devMode) console.log('Active Element: ' + index);
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
