<template>
  <div class="container overlay">
    <h1 class="title-overlay">Please, wait...</h1>
  </div>
</template>

<script>
export default {
  name: "Overlay",
};
</script>

<style scoped lang="scss">

  .overlay {

    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(170, 170, 170, 0.6); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
  }

  .title-overlay {
    margin: 200px auto;
  }
</style>