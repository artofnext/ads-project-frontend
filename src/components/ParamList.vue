<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table class="container">
      <TitleItem/>
      <ListItem  v-for="(item, index) in items" v-bind:key="index" v-bind:index='index'/>
      <AddItem/>
    </table>
    <div class="container inline">
      <div class="inline-element">
        <label for="uri-input">Endpoint URI</label>
        <input v-model="endpoint" type="text" name="uri-input" id="uri-input">
      </div>
      <div class="inline-element">
        <label for="iteration-input">Number of iterations</label>
        <input v-model="iterations" type="number" name="iteration-input" id="iteration-input" min="1" max="99999999">
      </div>
      <div class="inline-element">
        <button @click="submitData" class="submit-button">Submit</button>
      </div>
    </div>

    <!-- TODO delete! -->
    <p>Counter: {{ counter }}</p>
    <input v-model="counter">
    <button @click="increment">Up</button>
    <button @click="decrement">Down</button>


  </div>
</template>

<script>
// @ is an alias to /src
import ListItem from "@/components/ListItem.vue";
import AddItem from "@/components/AddItem.vue";
import TitleItem from "@/components/TitleItem.vue";

export default {
  name: "ParamList",
  components: {
    ListItem,
    AddItem,
    TitleItem,
  },
  computed: {
    endpoint: {
      get () {
        return this.$store.state.endpoint;
      },
      set (value) {
        this.$store.commit('updateEndpoint', value);
        console.log(this.$store.state.endpoint);
      }
    },
    iterations: {
      get () {
        return this.$store.state.iterations;
      },
      set (value) {
        this.$store.commit('updateIterations', value);
        console.log(this.$store.state.iterations);
      }
    },
    
    counter: {
      get () {
        return this.$store.state.count;
      },
      set (value) {
        this.$store.commit('updateCount', value);
        console.log(this.$store.state.count);
      }
    },
    items: {
      get () {
        return this.$store.state.datas;
      }
    }
  },

  props: {
    msg: String,
    // counter: this.$store.state.count
  },
  methods: {
    submitData() {
      this.$router.push('Result');
      this.$store.dispatch('submitData');
    },

    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    },
    decrement() {
      this.$store.commit('decrement');
      console.log(this.$store.state.count);
    }
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

  &-element {
    // margin: 10px;
  }
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

input {
  padding: 5px 10px;
  margin: 0 5px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  // width: 100%;
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
a {
  color: #42b983;
}
</style>
