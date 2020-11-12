<template>
  <li class="list-item">
      List Item
  </li>
</template>

<script>
export default {
  name: "ListItem",
  computed: {

  },
  props: {
    msg: String,
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .list-item {
        display: block;
        border: solid 1px black;
        padding: 10px;
    }
</style>
