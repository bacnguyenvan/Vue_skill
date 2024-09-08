<template>
    <div class="cart-block" @click="showCart">
      <p>Cart</p>
      <p class="total-item">{{ total }}</p>
    </div>
    <Modal title="Ordered items" v-model:visible="isVisible">
      <ShoppingCart :cart="cart"/>
    </Modal>
    <div class="shopping-cart">
      <!-- Title -->
      <div class="title">
        Shopping Bag
      </div>
      <ProductItems :products="products" @add-to-cart="updateCart"/>
      
    </div>
</template>
  
<script>
import ProductItems from '../ProductItems.vue'
import { Modal } from 'usemodal-vue3';
import ShoppingCart from '../ShoppingCart.vue';

export default {
  name: 'OrderPage',
  components: {
    ProductItems,
    Modal,
    ShoppingCart
  },
  data() {
    return {
      products: [
          {id: 1, 'name' : "Common Projects Bball High", 'color': "white", 'price' : 540, 'img': require('@/assets/img/camera.png')},
          {id: 2, 'name' : "Maison Margiela Future Sneakers", 'color': "white", 'price' : 600, 'img': require('@/assets/img/oil.png')},
          {id: 3, 'name' : "Our Legacy Brushed Scarf", 'color': "Brown", 'price' : 700, 'img': require('@/assets/img/soap.png')}
      ],
      total: 0,
      isVisible: false,
      cart: []
    }
  },
  methods: {
    updateCart(product) {

      this.total += 1

      const productInCart = this.cart.find(item => item.id == product.id)
      if (productInCart) {
        productInCart.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }

      console.log("cart: ", this.cart)
    },
    showCart() {
      this.isVisible = true 
    }
  },
}
</script>
  
<style scoped>
* {
  box-sizing: border-box;
}
 
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #7EC855;
  font-family: 'Roboto', sans-serif;
}
.cart-block {
  text-align: center;
  width: 100px;
  background: orange;
  color: white;
  font-weight: bold;
  margin: auto;
  border-radius: 40%;
  padding: 4px;
  cursor: pointer;
}
.number-input {
  width: 30px;
}
</style>