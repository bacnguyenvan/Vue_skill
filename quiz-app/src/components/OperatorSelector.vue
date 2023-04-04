<template>
    <div class="calculator">
      <div class="item" @click="calculator('+')"> + </div>
      <div class="item" @click="calculator('-')"> - </div>
      <div class="item" @click="calculator('/')"> / </div>
      <div class="item" @click="calculator('*')"> * </div>
    </div>
</template>

<script>
export default {
    name: "OperatorQuiz",
    data() {
        return {

        }
    },
    methods: {
        calculator(operator) {
          this.$emit('excuteCalculator', operator)
          console.log(operator)
        }
    },
}
</script>
<style scoped>
.calculator .item {
  background: #1d7074bd;
  color: white;
  font-weight: bold;
  width: 20%;
  padding: 15px;
  font-size: 30px;
  cursor: pointer;
}

.calculator {
  display: flex;
  width: 100%;
  margin: auto;
  text-align: center;
  justify-content: space-evenly;
}
</style>