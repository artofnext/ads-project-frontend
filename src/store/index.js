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
        type: 'Int',
        from: 0,
        to: 1000,
        index: 0,
      },
      {
        name: 'Beta',
        type: 'Int',
        from: 0,
        to: 1000,
        index: 1,
      },
      {
        name: 'Gamma',
        type: 'Bool',
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
    // mocked object
    responseObj: [
      {
        name: 'Running Algorithm',
        value: 'NSGA2'
      },
      {
        name: 'Problem',
        value: 'KURSAWE'
      },
      {
        name: 'Runs',
        value: '2'
      },
      {
        name: 'Run file',
        value: 'FUN2.TSV',
        filelink: 'https....FUN2.TSV',
      },


    ],
    dataTypes: [
      'Str',
      'Int',
      'Bool',
    ],
    activeElement: NaN,
    endpoint: '',
    iterations: 0,
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

    updateEndpoint (state, value) {
      state.endpoint = value;
      if (devMode) console.log('Endpoint Uri updated: ' + value);
    },

    updateIterations (state, value) {
      state.iterations = value;
      if (devMode) console.log('Iterations updated: ' + value);
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
  actions: {

    // todo
    submitData ({ commit }) {
      axios
          .get('Your API link', {
              headers: {
                  'Ocp-Apim-Subscription-Key': 'your key',
              }
          })
          .then(response => response.data)
          .then(items => {
              console.log(items);
          commit('SET_Items', items)
      })
  }
  },
  modules: {}
});
