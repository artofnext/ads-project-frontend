<template>
  <tr class="list-item">
      <td>{{ name }}</td>
      <td>{{ value }} <span v-if="file"><a>{{ filelink }}</a></span></td>
      
  </tr>
</template>

<script>
export default {
  name: "ListItem",
  computed: {
      dataObj: {
        // Bad practice: mutate object by reference
        get () {
          return this.$store.state.pesponseObj[this.index];
        },
      },
      dataTypes: {
        get () {
          return this.$store.state.dataTypes;
      },
      activeElement: {
        get () {
          return this.$store.state.activeElement
        }
      },
    }
  },
  props: {
      index: Number
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .list-item {
        // display: block;
        // border: solid 1px black;
        // padding: 10px;
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
