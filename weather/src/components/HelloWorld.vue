<template>
  <div class="wrap">
    <div class="search">
      <input type="text" />
    </div>
    <div>
      <h2 class="city">London, GB</h2>
      <h3 class="date">
        Sunday 12 January 2020
      </h3>
    </div>
    <div class="temperature">
      7°C
    </div>
    <div class="feature">
      <h2>Clouds</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search input {
  width: 90%;
  padding: 10px;
  font-size: 20px;
  border-radius: 1px 10px;
}
.wrap {
  background-image: url('~@/assets/warm-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  height: 100vh;
  padding-top: 20px;
}
h2.city {
    color: white;
    font-size: 50px;
}

h3.date {
    color: white;
    font-size: 25px;
}

.temperature {
    color: white;
    font-size: 100px;
    font-family: fantasy;
    background: #ffffff5c;
    width: 50%;
    margin: auto;
    border-radius: 10px;
}

.feature h2 {
    color: white;
    font-size: 40px;
    font-weight: 400px;
}
</style>
