<template>
  <div class="hello">
    <h1>End: {{ showTime.toLocaleString() }}</h1>
    <h1>Enrollment Closes In:</h1>
    <div class="time-number">
      <span>{{ showDays }}</span> : 
      <span>{{ showHours }}</span> : 
      <span>{{ showMinutes }}</span> : 
      <span>{{ showSeconds }}</span>
    </div>
    <div class="time-text">
      <span>days</span> 
      <span>hours</span> 
      <span>minutes</span> 
      <span>seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      showDays: 0,
      showHours: 0,
      showMinutes: 0,
      showSeconds: 0,
      showTime: new Date(2023, 0, 29, 15, 18, 10)
    }
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = this.showTime
        const distance = ( end.getTime() - now.getTime() ) / 1000
        if(distance < 0) {
          clearInterval(timer)
          alert("Day off")
          return
        }

        const days = Math.floor(distance / (60*60*24))
        const hours = Math.floor((distance % (60*60*24)) / 3600 )
        const minutes = Math.floor(distance % 3600 / 60)
        const seconds = Math.floor(distance % 60)

        this.showSeconds = seconds < 10 ? "0" + seconds : seconds
        this.showMinutes = minutes < 10 ? "0" + minutes : minutes
        this.showHours = hours < 10 ? "0" + hours : hours
        this.showDays = days < 10 ? "0" + days : days
        
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time-number {
  font-weight: bold;
  font-size: 30px;
}

.time-text span {
  margin-left: 14px;
}
</style>
