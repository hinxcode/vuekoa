<template>
  <div class="NotFound">
    <img height="100" src="../assets/logo.png" />
    <h1>404</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: 'Oops! The page you visited does not exist.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 100;
  font-size: 11em;
  line-height: 1em;
  margin-top: 15px;
  margin-bottom: 50px;
}
h2 {
  font-weight: 100;
}
div {
  text-align: center;
}
</style>
