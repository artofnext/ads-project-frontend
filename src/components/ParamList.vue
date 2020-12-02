<template>
  <div class="hello">
    <h1>SGIA - Sistema de Gestão Inteligente de Algoritmos</h1>
    <h3>{{ msg }}</h3>
    <table class="container">
      <TitleItem/>
      <ListItem  v-for="(item, index) in items" v-bind:key="index" v-bind:index='index'/>
      <AddItem/>
    </table>
    <div v-if="error" class="container">
      <p class="error-message">{{ errorMessage }}</p>
    </div>
    <div class="container inline">
      <EvaluationModule2/>     
      <div class="inline-element">
        <label for="iteration-input">Number of iterations</label>
        <input v-model="iterations" type="number" name="iteration-input" id="iteration-input" min="1" max="99999999">
      </div>
      <div class="inline-element">
        <button @click="submitData" class="submit-button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListItem from "@/components/ListItem.vue";
import AddItem from "@/components/AddItem.vue";
import TitleItem from "@/components/TitleItem.vue";
import EvaluationModule2 from "@/components/EvaluationModule2.vue";

export default {
  name: "ParamList",
  components: {
    ListItem,
    AddItem,
    TitleItem,
    EvaluationModule2,
  },

  computed: {

    iterations: {

      get () {
        return this.$store.state.iterations;
      },

      set (value) {
        this.$store.commit('updateIterations', value);
        if (this.$store.devMode) console.log(this.$store.state.iterations);
      }
    },
    
    items: {

      get () {
        return this.$store.state.datas;
      }
    },

    error: {

      get () {
        return this.$store.state.errorStatus;
      }
    },

    errorMessage: {

      get () {
        return this.$store.state.errorMessage;
      }
    }
  },

  props: {
    msg: String,
  },

  methods: {

    chekout() {
      this.$store.commit('setErrorStatus', false);
      this.$store.commit('clearErrorMessage');
      if (this.$store.state.datas.length < 1) {
        if (this.$store.devMode) console.log("No variables provided!");
        this.$store.commit('setErrorStatus', true);
        this.$store.commit('setErrorMessage', "No variables provided! ");
      }
      if (!this.$store.state.endpoint && !this.$store.state.isJarUploaded) {
        if (this.$store.devMode) console.log("No evaluation method provided!");
        this.$store.commit('setErrorStatus', true);
        this.$store.commit('setErrorMessage', "No evaluation method provided! ");
      }
        if (this.$store.state.datas.length > 10) {
        if (this.$store.devMode) console.log("Too many variables!");
        this.$store.commit('setErrorStatus', true);
        this.$store.commit('setErrorMessage', "Too many variables! ");
      }
      if (this.$store.devMode) console.log("Checkout done");
    },

    submitData() {
      this.chekout();
      if (!this.$store.state.errorStatus) {
        this.$router.push('Result');
        this.$store.dispatch('submitData');
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container {
  margin: 20px auto;
  max-width: 1000px;
  width: 80%;
  text-align: initial;
}

.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submit-button {
  width: 70px;
  padding: 5px 10px;
  background-color: white;
  color: #B10000;
  border: solid 1px #B10000;
  border-radius: 5px;
  outline: none;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px #B10000;
  }

  &:active {
    background-color: #B10000;
    color: white;
  }
}

.error-message {
  color: white;
  background-color: #B10000;
  text-align: center;
  padding: 10px 0;
}

input {
  padding: 5px 10px;
  margin: 0 5px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}

tr:nth-child(even) {
  background-color: #C4C4C4;
}

tr:nth-child(odd) {
  background-color: #E1E1E1;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
