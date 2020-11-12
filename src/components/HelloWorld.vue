<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Counter: {{ counter }}</p>
    <input v-model="counter">
    <button @click="increment">Up</button>
    <button @click="decrement">Down</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {

    counter: {
      get () {
        return this.$store.state.count
      },
      set (value) {
        this.$store.commit('updateCount', value);
        console.log(this.$store.state.count);
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
