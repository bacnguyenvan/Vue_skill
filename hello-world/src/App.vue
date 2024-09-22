<template>
  
  <HelloWorld msg="Welcome to kita shop"/>
  <router-link class="link" to="/">
    <div>
      <p>Home</p>
    </div>
  </router-link>

  <router-link class="link" to="/order">
    <div>
      <p>Cart</p>
    </div>
  </router-link>

  <router-link class="link" to="/todo-app">
    <div>
      <p>Todo App</p>
    </div>
  </router-link>

  <router-link class="link" to="/lifecycle">
    <div>
      <p>Lifecycle</p>
    </div>
  </router-link>

  <router-link class="link" to="/event">
    <div>
      <p>Event</p>
    </div>
  </router-link>

  <router-link class="link" to="/chat">
    <div>
      <p>Chat</p>
    </div>
  </router-link>

  <router-link class="link" to="/upload">
    <div>
      <p>Upload</p>
    </div>
  </router-link>

  <router-link class="link" to="/upload-chunk">
    <div>
      <p>Upload Chunk</p>
    </div>
  </router-link>

  <router-view />
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


