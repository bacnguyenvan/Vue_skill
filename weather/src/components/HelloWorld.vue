<template>
  <div id="wrap" :class="typeof weather.main != 'undefined' && setTemperature > 16 ? 'warm' : '' ">
    <div class="search">
      <input type="text" v-model="query" @keypress="fetchWeather" />
    </div>
    <div class="content" v-if="typeof weather.main != 'undefined'">
      <div>
        <h2 class="city">{{ weather.name }}, {{ weather.sys.country }}</h2>
        <h3 class="date"> {{ dateBuilder() }} </h3>
      </div>
      <div class="temperature">{{ setTemperature }}°C</div>
      <div class="feature">
        <h2>{{ weather.weather[0].main }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      appid: "439d4b804bc8187953eb36d2a8c26a02",
      baseUrl: "https://openweathermap.org/data/2.5",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        fetch(`${this.baseUrl}/find?q=${this.query}&appid=${this.appid}`).then(
          (res) => {
            return res.json()
          }
        ).then((res) => {
          console.log('res0: ', res)
          this.weather = res.list[0]
        })
      }
    },
    dateBuilder() {
      let d = new Date()
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      let day = days[d.getDay()]
      let date = d.getDate()
      let month = months[d.getMonth()]
      let year = d.getFullYear()

      return `${day} ${date} ${month} ${year}`
    }
  },
  computed: {
    setTemperature() {
      return Math.floor(this.weather.main.temp - 273,15)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search input {
  width: 90%;
  padding: 10px;
  font-size: 20px;
  border-radius: 1px 10px;
}
#wrap {
  background-image: url('~@/assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  height: 100vh;
  padding-top: 20px;
}
#wrap.warm {
  background-image: url("~@/assets/warm-bg.jpg");
}
h2.city {
  color: white;
  font-size: 50px;
  text-shadow: 3px 6px rgb(0 0 0 / 25%);
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
