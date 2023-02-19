<template>
  <div id="app">
    <HelloWorld msg="Calculator application"/>
    <table class="table">
      <tr>
        <th class="result" colspan="4">{{ current || 0 }}</th> 
      </tr>
      <tr>
        <td @click="clear">C</td>
        <td @click="sign">+/-</td>
        <td @click="percent">%</td>
        <td @click="divide" class="calculate">÷</td>
      </tr>
      <tr>
        <td @click="append(7)">7</td>
        <td @click="append(8)">8</td>
        <td @click="append(9)">9</td>
        <td @click="multiplication" class="calculate">x</td>
      </tr>
      <tr>
        <td @click="append(4)">4</td>
        <td @click="append(5)">5</td>
        <td @click="append(6)">6</td>
        <td @click="minus" class="calculate">-</td>
      </tr>
      <tr>
        <td @click="append(1)">1</td>
        <td @click="append(2)">2</td>
        <td @click="append(3)">3</td>
        <td @click="add" class="calculate">+</td>
      </tr>
      <tr>
        <td @click="append(0)" colspan="2">0</td>
        <td @click="dot">.</td>
        <td @click="equal" class="calculate">=</td>
      </tr>
    </table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      current: '',
      previous: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear() {
      this.current = ''
    },
    append(number) {
      this.current = `${this.current}${number}`;
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
    },
    percent() {
      this.current = parseFloat(this.current) / 100;
    },
    dot() {
      if(this.current.indexOf('.') === -1) {
        this.append('.')
      }
    },
    divide() { 
      this.append('/')
      this.operator = (a,b) => a / b;
      this.setPrevious('/')
    },
    add() { 
      this.append('+')
      if(this.operatorClicked) this.equal()
      this.operator = (a,b) => a + b;
      this.setPrevious('+')
    },
    minus() { 
      this.append('-')
      this.operator = (a,b) => a - b;
      this.setPrevious('-')
    },
    multiplication() { 
      this.append('*')
      this.operator = (a,b) => a * b;
      this.setPrevious('*')
    },
    setPrevious(opera) {
      this.previous = this.current.replace(opera , "")
      this.operatorClicked = true
    },
    equal() {
      this.current = this.current.replace('*' , "")
      this.current = this.current.replace('-' , "")
      this.current = this.current.replace('+' , "")
      this.current = this.current.replace('/' , "")
      this.current = this.current.replace(this.previous , "")
      this.current = `${this.operator(
        parseFloat(this.previous), 
        parseFloat(this.current)
      )}`;
      this.previous = null;
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  cursor: pointer;
}
.table{
	width: 20%;
	margin: auto;
}
td.calculate {
  width: 20%;
  text-align: center;
  background: orange;
  color: white;
  font-weight: bold;
}
th.result {
  background: #000000b5;
  color: white;
}
</style>
