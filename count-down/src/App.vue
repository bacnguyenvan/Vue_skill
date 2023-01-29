<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>End from child to parent: {{ timeEnd }}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" @sendTime="getTimeToShow"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      timeEnd: 0,
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    getTimeToShow(e) {
      console.log("e: ", e)
      this.timeEnd = e.toLocaleString()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
