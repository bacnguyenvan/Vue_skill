<template>
  <div class="app-container">
    <button @click="this.toggle = !this.toggle">Toggle</button>
    <LifecycleApp v-show="toggle" :currentTime="currentTime"/>
  </div>
</template>
  
<script>
import LifecycleApp from './lifecycle/LifecycleApp.vue';
export default {
  components: {
    LifecycleApp
  },
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      toggle: true
    };
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = new Date().toLocaleTimeString();
    }
  },
  created() {
    console.log('Component created');
  },
  mounted() {
    console.log('Component mounted');
    this.timer = setInterval(this.updateCurrentTime, 1000);
  },
  beforeUnmount() {
    console.log('Component before unmount');
    clearInterval(this.timer);
  },
  unmounted() {
    console.log('Component unmounted');
  }
};
</script>

<style scoped>
@import "../assets/css/style.css";
</style>
  