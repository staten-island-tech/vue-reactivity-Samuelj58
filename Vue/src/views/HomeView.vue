<template>
  <h1>consoles</h1>
  <div class="container">
    <img v-for="console in consoles" :key="console.name" :src="console.img" :alt="console.name + ' Image'">
  </div>
</template>

<script setup>
import { ref } from 'vue'; 

const consoles = ref([
  {
    name: 'PlayStation 5',
    img: "https://media.gamestop.com/i/gamestop/11108141?$pdp2x$"
  },
  {
    name: 'Xbox',
    img: "https://media.gamestop.com/i/gamestop/11108371?$pdp2x$"
  },
  {
    name: 'Nintendo Switch',
    img: "https://media.gamestop.com/i/gamestop/11095819?$pdp2x$"
  },
  {
    name: 'Steam Deck',
    img: "https://media.gamestop.com/i/gamestop/20003488-1?$pdp2x$"
  },
  {
    name: 'ROG ally',
    img: "https://www.zoro.com/static/cms/product/large/DH%20Commerce%20dba%20Streamline%20Distributors_6542964cv16dxxxx1xxxx788028.jpeg"
  }
]);
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
.container img {
  max-width: 100px;
  max-height: 100px;
}
</style>
