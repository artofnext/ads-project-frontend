<template>
  <tr class="list-item">
    <td>{{ dataObj.name }}</td>
    <td>
      {{ dataObj.value }}
      <span v-if="dataObj.filelink">
        <a class="download-button" v-bind:href="dataObj.filelink">&darr;</a>
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ListItem",
  computed: {
    dataObj: {
      // Bad practice: mutate object by reference
      get() {
        return this.$store.state.responseObj[this.index];
      },
    },
  },
  props: {
    index: Number,
  },
  methods: {},
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

  &:nth-child(even) {
    color: #b10000;
  }
}

.download-button {
  background-color: white;
  border: solid 1px #b10000;
  border-radius: 5px;
  padding: 3px 8px;
  display: inline-block;
  outline: none;
  transition: all 0.3s ease-in-out;
  color: #b10000;
  margin: 0 5px;
  &:hover {
    box-shadow: 0 0 5px #b10000;
  }
  &:active {
    box-shadow: none;
  }
}
</style>
