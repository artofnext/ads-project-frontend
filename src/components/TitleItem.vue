<template>
  <tr class="title-list-item">
      <th>#</th>
      <th>Variable Name</th>
      <th>Variable Type</th>
      <th>From</th>
      <th>To</th>
      <th>Del</th>
  </tr>
</template>

<script>
export default {
  name: "TitleItem",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .title-list-item {
        background-color: #8B8B8B !important;
        color: white;
    }

    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 10px;
    }
</style>
