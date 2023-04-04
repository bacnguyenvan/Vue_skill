<template>
  <div class="hello">
    <div class="header">
      <h1>My Music</h1>
    </div>
    <div class="body">
      <div class="item">
        <p class="music-name">GRATEFUL - NEFFEX</p>
      </div>
      <div class="music-block">
        <div class="prev">
          <button class="prev-btn">Prev</button>
        </div>
        <div class="play">
          <button class="play-btn">Play</button>
        </div>
        <div class="next">
          <button class="next-btn">next</button>
        </div>
      </div>
      <div class="play-list">
        <p>The Playlist</p>
      </div>
      <div class="music-song">
        <p class="m-current">GRATEFUL - NEFFEX</p>
        <p class="m-next">Invincible - Deaf Kev</p>
      </div>
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
.header {
  background: grey;
  padding: 5px;
  color: white;
}

p.music-name {
  font-weight: bold;
  margin: 20px;
  font-size: 30px;
}

.music-block {
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: space-evenly;
}

.prev prev-btn {
  background: orange;
  color: white;
}

button.prev-btn {
  color: white;
  background: orange;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

button.play-btn {
  background: pink;
  padding: 10px 25px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

button.next-btn {
  color: white;
  background: orange;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.play-list {
  margin: 30px;
  font-size: 30px;
}
p.m-current {
  background: pink;
  width: 40%;
  margin: auto;
  padding: 20px;
  color: white;
  font-weight: bold;
}

p.m-next {
  font-weight: bold;
}
</style>
