<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import layout from './components/layout/Layout'

export default {
  name: 'App',
  components: {
    layout
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
