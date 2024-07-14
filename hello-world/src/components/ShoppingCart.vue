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
  
  <style>
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
  .shopping-cart {
    width: 750px;
    height: 423px;
    margin: 80px auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;
   
    display: flex;
    flex-direction: column;
  }
  .title {
    height: 60px;
    border-bottom: 1px solid #E1E8EE;
    padding: 20px 30px;
    color: #5E6977;
    font-size: 18px;
    font-weight: 400;
  }
   
  .item {
    padding: 20px 30px;
    height: 120px;
    display: flex;
  }
   
  .item:nth-child(3) {
    border-top:  1px solid #E1E8EE;
    border-bottom:  1px solid #E1E8EE;
  }
  .buttons {
    position: relative;
    padding-top: 30px;
    margin-right: 60px;
  }
  .delete-btn,
  .like-btn {
    display: inline-block;
    Cursor: pointer;
  }
  .delete-btn {
    width: 18px;
    height: 17px;
  }
   
  .like-btn {
    position: absolute;
    top: 9px;
    left: 15px;
    width: 60px;
    height: 60px;
    background-size: 2900%;
    background-repeat: no-repeat;
  }
  .is-active {
    animation-name: animate;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-timing-function: steps(28);
    animation-fill-mode: forwards;
  }
   
  @keyframes animate {
    0%   { background-position: left;  }
    50%  { background-position: right; }
    100% { background-position: right; }
  }
  .image {
    margin-right: 50px;
  }
  .description {
    padding-top: 10px;
    margin-right: 60px;
    width: 115px;
  }
   
  .description span {
    display: block;
    font-size: 14px;
    color: #43484D;
    font-weight: 400;
  }
   
  .description span:first-child {
    margin-bottom: 5px;
  }
  .description span:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939E;
  }
  .quantity {
    padding-top: 20px;
    margin-right: 60px;
  }
  .quantity input {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }
   
  button[class*=btn] {
    width: 30px;
    height: 30px;
    background-color: #E1E8EE;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  .minus-btn img {
    margin-bottom: 3px;
  }
  .plus-btn img {
    margin-top: 2px;
  }
   
  button:focus,
  input:focus {
    outline:0;
  }
  .total-price {
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }
  @media (max-width: 800px) {
    .shopping-cart {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .item {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
    }
    .image img {
      width: 50%;
    }
    .image,
    .quantity,
    .description {
      width: 100%;
      text-align: center;
      margin: 6px 0;
    }
    .buttons {
      margin-right: 20px;
    }
  }
  .image {
    width: 50px;
    height: 50px;
  }
  
  .image img {
    width: 100%;
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
  }
  .number-input {
    width: 30px;
  }
  </style>
  