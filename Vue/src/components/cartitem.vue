<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - Price: ${{ item.price }} 
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ getTotal() }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cartItems = ref([]);

const addToCart = (item) => {
  cartItems.value.push(item);
};

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
};

const getTotal = () => {
  return cartItems.value.reduce((total, item) => total + item.price, 0);
};
</script>
