<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <tututu/>
  </div>
</template>

<script>
import vvv from './components/aaa.vue';
export default {
  name: 'app',
  components: {
   tututu:vvv,
  }
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
