<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table class="var-list">
      <TitleItem/>
      <ListItem  v-for="(item, index) in items" v-bind:key="index" v-bind:index='index'/>
      <AddItem/>
    </table>
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
    counter: {
      get () {
        return this.$store.state.count
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
.var-list {
  margin: 20px auto;
  max-width: 1000px;
  width: 80%;
  text-align: initial;
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
