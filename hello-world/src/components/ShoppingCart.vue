<template>
    <div class="shopping-cart">
      <div class="item" v-for="(product, index) in cart" :key="index">
    
        <div class="image">
          <img :src="product.img" alt="" />
        </div>
    
        <div class="description">
          <span>{{ product.id + " - " + product.name }}</span>
          <span>{{ product.color }}</span>
        </div>
    
        <div class="">
          <button class="plus-btn" type="button" name="button">
            +
          </button>
          <input type="text" name="name" :value="product.quantity" class="number-input">
          <button class="minus-btn" type="button" name="button">
            -
          </button>
        </div>
    
        <div class="total-price">${{ product.price }}</div>
      </div>
    </div>
  </template>
  
  <script>
 
  export default {
    name: 'ShoppingCart',
    props: ['cart'],
    data() {
      return {
        products: [
          {id: 1, 'name' : "Common Projects Bball High", 'color': "white", 'price' : 540, 'img': require('@/assets/img/camera.png')},
          {id: 2, 'name' : "Maison Margiela Future Sneakers", 'color': "white", 'price' : 600, 'img': require('@/assets/img/oil.png')},
          {id: 3, 'name' : "Our Legacy Brushed Scarf", 'color': "Brown", 'price' : 700, 'img': require('@/assets/img/soap.png')}
        ],
      }
    },
  }
  </script>
  
  <style scoped>

  </style>
  