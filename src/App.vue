<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Request</router-link> |
      <router-link to="/result">Result</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
  margin-top: 50px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #222222;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
