<template>
    <HelloWorld msg="Welcome to Your V App"/>
    <h2>{{ product }}</h2>
    <a :href="href" target="_blank">Tutorial</a>
    <p>Inventory: {{ inventory }}</p>
    <p v-if="inventory > 0">In stocks</p>
    <p v-else>Out of stocks</p>
    <ul>
      <li v-for="size in sizes" :key="size.id">{{ size.id + "-" + size.name }}</li>
    </ul>
    <p v-if="onSale">{{ title }}</p>
    <ProductDetail :detail="detail" @increate-event="callback"/>
    <br/>
    <button @click="decreaseCart" class="btn" :class="{active: activeClass}">-1</button>
  </template>
  
  <script>
  import HelloWorld from './components/HelloWorld.vue'
  import ProductDetail from './components/ProductDetail.vue'
  
  export default {
    name: 'AppBk',
    components: {
      HelloWorld,
      ProductDetail
    },
    data() {
      return {
        product: 'Socks',
        href: "https://vuejs.org/guide/introduction.html",
        inventory: 10,
        sizes: [
          {id: 2, name: "M"},
          {id: 1, name: "L"},
          {id: 3, name: "S"},
          {id: 4, name: "XL"}
        ],
        activeClass: true,
        onSale: false,
        detail: {
          'id': 10,
          'name':"Laptop",
          'price':2000
        } 
      }
    },
    methods: {
      decreaseCart() {
        this.inventory -= 1
      },
      callback(value) {
        this.inventory += value
      }
    },
    computed: {
      title() {
        return this.product + " -:- " + this.href
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
  .btn {
    width: 60px;
  }
  .active {
    background-color: green
  }
  </style>
  