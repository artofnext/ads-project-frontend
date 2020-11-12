<template>
  <tr class="list-item">
      <td>{{ datas.index+1 }}</td>
      <td><input class="name-input"></td>
      <td><input class="type-input"></td>
      <td><input class="from-input"></td>
      <td><input class="to-input"></td>

  </tr>
</template>

<script>
export default {
  name: "ListItem",
  computed: {

  },
  props: {
      datas: Object
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
</style>
