<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark nav">
      Post it App
      <img
        src="../../static/assets/post-it.png"
        width="50"
        height="50"
        alt="dot"
      />
    </nav>
    <router-view />
  </div>
</template>

<script>
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 32px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav {
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
}
</style>
