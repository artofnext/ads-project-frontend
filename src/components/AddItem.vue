<template>
  <tr class="add-list-item">
      <td colspan="6">
      <button @click="addItem" class="add-button">+</button> Add
      </td>
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
        width: 100%;
    }

    .add-button {
        background-color: white;
        border: solid 1px #464646;
        border-radius: 50px;
        padding: 3px 8px;
        display: inline-block;
        outline: none;
        transition: all .3s ease-in-out;
        margin: 3px;

        &:hover {
            box-shadow: 0 0 5px #464646;
        }

        &:active {
            box-shadow: none;
        }
    }
</style>