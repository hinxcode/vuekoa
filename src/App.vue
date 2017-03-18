<template>
  <div id="app">
    <img src="./assets/logo.png">
    <img src="./assets/nova.jpg">
    <img src="./assets/test.png">
    <img src="./assets/fuck.png">
    <img src="./assets/images.jpg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
