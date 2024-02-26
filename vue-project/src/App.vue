<template>
  <div>
    <h1>Buy your consoles here!!</h1>
    <ul>
      <li v-for="(console, index) in consoles" :key="index">
        <img :src="console.img" :alt="console.name + ' Image'" class="console-img">
        <button @click="addToCart(console)">Add to Cart</button>
      </li>
    </ul>
    <div class="cart">
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="(item, index) in cart" :key="index">{{ item.name }} - Price: ${{ item.price }}</li>
      </ul>
      <p>Total: ${{ getTotal() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consoles: [
        {
          name: 'PlayStation 5',
          price: 449.99,
          img: "https://media.gamestop.com/i/gamestop/11108141?$pdp2x$"
        },
        {
          name: 'Xbox',
          price: 449.99,
          img: "https://media.gamestop.com/i/gamestop/11108371?$pdp2x$"
        },
        {
          name: 'Nintendo Switch',
          price: 259.99,
          img: "https://media.gamestop.com/i/gamestop/11095819?$pdp2x$"
        },
        {
          name: 'Steam Deck',
          price: 278.99,
          img: "https://media.gamestop.com/i/gamestop/20003488-1?$pdp2x$"
        },
        {
          name: 'ROG ally',
          price: 888.99,
          img: "https://www.zoro.com/static/cms/product/large/DH%20Commerce%20dba%20Streamline%20Distributors_6542964cv16dxxxx1xxxx788028.jpeg"
        }
      ],
      cart: []
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    },
    getTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  }
};
</script>

<style>
.console-img {
  width: 100px;
  height: 100px;
  margin-top: 10px; 
  margin-bottom: 10px;
}
body{
  background-color: rgb(255, 219, 255);
}
.cart {
  margin-top: 20px;
  background-color: rgb(205, 255, 242);
}
</style>
