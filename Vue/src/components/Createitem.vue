<template>
  <div class="container">
    <img v-for="(console, index) in consoles" :key="index" :src="console.img" :alt="console.name + ' Image'" style="max-width: 100px;">
  </div>
</template>

<script>
import CreateItem from './Createitem.vue'; // Correct import path

export default {
  components: {
    CreateItem
  },
  data() {
    return {
      consoles: [
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
      ]
    };
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.container img {
  max-width: 100px;
}
</style>
