<template>
    <div class="item" v-for="(product, index) in products" :key="index">    
        <div class="image">
          <img :src="product.img" alt="" />
        </div>
    
        <div class="description">
          <span>{{ product.id + " - " + product.name }}</span>
          <span>{{ product.color }}</span>
        </div>
    
        <div class="quantity" @click="addToCart(product)">
            +Add to cart
        </div>
    
        <div class="total-price">${{ product.price }}</div>
    </div>
</template>

<script>
export default {
    name: 'ProductItems',
    props: ['products'],
    methods: {
        addToCart(product){
            this.$emit('add-to-cart', product)
        }
    }
}
</script>