<template>
  <tr class="add-list-item">
      <button @click="addItem" class="add-button">+</button> Add
  </tr>
</template>

<script>
export default {
  name: "AddItem",
  computed: {
    
  },
  props: {

  },
  methods: {
    addItem () {
      this.$store.commit('addVar');
      console.log(this.$store.datas);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .add-list-item {
        // display: block;
        // border: solid 1px black;
        // padding: 6px 10px;
    }

    .add-button {
        background-color: white;
        border: solid 1px #464646;
        border-radius: 50px;
        padding: 5px 8px;
        display: inline-block;
        outline: none;
        transition: all .3s ease-in-out;

        &:hover {
            box-shadow: 0 0 5px #464646;
        }

        &:active {
            box-shadow: none;
        }
    }
</style>