<template>
    <div>
      <h1>Current Time</h1>
      <p>{{ currentTime }}</p>
    </div>
  </template>
    
  <script>
  export default {
    props: ['currentTime'],
    data() {
      
    },
  };
  </script>
  
  <style>
  h1 {
    color: #42b983;
  }
  </style>
    