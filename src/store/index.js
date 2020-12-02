import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const devMode = true;

export default new Vuex.Store({
  state: {
    // mocked object
    datas: [],
    // datas: [
    //   {
    //     name: "Alpha",
    //     type: "Int",
    //     from: 0,
    //     to: 1000,
    //     index: 0,
    //   },
    //   {
    //     name: "Beta",
    //     type: "Int",
    //     from: 0,
    //     to: 1000,
    //     index: 1,
    //   },
    //   {
    //     name: "Gamma",
    //     type: "Bool",
    //     from: 0,
    //     to: 1000,
    //     index: 2,
    //   },
    //   {
    //     name: "Epsilon",
    //     type: "int",
    //     from: 0,
    //     to: 1000,
    //     index: 3,
    //   },
    // ],
    // mocked object
    responseObj: [
      {
        name: "Running Algorithm",
        value: "NSGA2"
      },
      {
        name: "Problem",
        value: "KURSAWE"
      },
      {
        name: "Runs",
        value: "2"
      },
      {
        name: "Run file",
        value: "FUN2.TSV",
        filelink: "https....FUN2.TSV",
      },
    ],

    dataTypes: [
      "Double",
      "Int",
    ],

    endpoint: "",
    iterations: 1,
    avaitStatus: false,
    isJarUploaded: false,
    errorStatus: false,
    errorMessage: "",
  },

  getters: {

    getDatas: state => {
      let objToSend = [];
      objToSend.push(
        {
          "variables": state.datas,
        },
        {
          "iterations": state.iterations,
        },
      );
      if (state.endpoint) objToSend.push(
        {
          "endpoint": state.endpoint,
        }
      );
      return objToSend;
    }
  },

  mutations: {

    addVar (state) {
      state.datas.push({
        name: "",
        type: "",
        from: 0,
        to: 10,
        index: state.datas.length,
      });
      if (devMode) console.log("New element added");
    },

    removeVar (state, index) {
      state.datas.splice(index, 1);
      if (devMode) console.log("Element " + index + " deleted");
    },

    updateEndpoint (state, value) {
      state.endpoint = value;
      if (devMode) console.log("Endpoint Uri updated: " + value);
    },

    updateIterations (state, value) {
      state.iterations = value;
      if (devMode) console.log("Iterations updated: " + value);
    },

    SET_Items (state, items) {
      state.responseObj = items
    },

    setAvaitStatus (state, status) {
      state.avaitStatus = status;
    },

    setJarUploaded (state, value) {
      state.isJarUploaded = value;
      if (devMode) console.log("isJarUploaded updated: " + value);
    },

    setErrorStatus (state, status) {
      state.errorStatus = status;
      if (devMode) console.log("Error Status updated: " + status);
    },
    
    setErrorMessage (state, message) {
      state.errorMessage += message;
      if (devMode) console.log("Error Message updated: " + message);
    },

    clearErrorMessage (state) {
      state.errorMessage = "";
      if (devMode) console.log("Error Message cleared: ");
    },

  },

  actions: {

    submitData ({ commit, getters }) {
      if (devMode) console.log("submitData action called");

      commit("setAvaitStatus", true);
      axios
        .post("http://localhost:8080/request", getters.getDatas)
        .then(response => response.data)
        .then(items => {
          if (devMode) console.log(items);
          commit("SET_Items", items);
          commit("setAvaitStatus", false);
        })
        .catch((e) => {
          if (devMode) console.log("Request Error");
          commit("SET_Items", [
            {
              name: "Unexpected error",
              value: e.message
            }
          ]);
          commit("setAvaitStatus", false);
        });
    }
  },
  modules: {}
});
