<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <OperatorSelector v-if="!operator" @excuteCalculator="excuteCalculator"/>
    <OperatorQuiz v-if="operator" :operator="operator" @clearOperator="clearOperator"/>
  </div>
</template>

<script>
import OperatorQuiz from './OperatorQuiz.vue';
import OperatorSelector from './OperatorSelector.vue';
export default {
    name: "HelloWorld",
    data() {
      return {
        operator: null
      }
    },
    props: {
      msg: String
    },
    components: { OperatorSelector, OperatorQuiz },
    methods: {
      excuteCalculator(val){
        this.operator = val
      },
      clearOperator(){
        this.operator = null
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

