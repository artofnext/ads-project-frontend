<template>
  <tr @click="activateElement" class="list-item">
      <td>{{ datas.index + 1 }}</td>
      <td><input v-model="datas.name" class="name-input"></td>
      <td>
            <select name="dataType" id="dataType">
                <option v-for="type in dataTypes" v-bind:key="type"  v-bind:value="type">{{ type }}</option>
            </select>
          <!-- <input v-model="datas.type" class="type-input"> -->
        </td>
      <td><input v-model="datas.from" class="from-input"></td>
      <td><input v-model="datas.to" class="to-input"></td>
      <td><button @click="deleteItem" class="delete-button">x</button></td>

  </tr>
</template>

<script>
export default {
  name: "ListItem",
  computed: {
      dataTypes: {
      get () {
        return this.$store.state.dataTypes;
      }
    }
  },
  props: {
      datas: Object
  },
  methods: {
    deleteItem() {
      this.$store.commit('removeVar', this.datas.index);
      console.log(this.$store.state.count);
    },
    activateElement() {
        this.$store.commit('updateActiveElement', this.datas.index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .list-item {
        // display: block;
        // border: solid 1px black;
        // padding: 10px;
        &:hover {
            box-shadow: 0px 0px 10px #999;
        }
    }

    td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;
}

.delete-button {
    background-color: white;
    border: solid 1px #e64f4f;
    border-radius: 50px;
    padding: 3px 8px;
    display: inline-block;
    outline: none;
    transition: all .3s ease-in-out;
    color: #e64f4f;
    &:hover {
        box-shadow: 0 0 5px #e64f4f;
    }
    &:active {
        box-shadow: none;
    }
}
</style>
