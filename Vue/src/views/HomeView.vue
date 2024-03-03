<script setup>
import cartitem from "@/components/cartitem.vue";
import Createitem from "@/components/Createitem.vue";
import { useCounterStore } from "@/stores/carts";
</script>

<template>
  <div id="main">
    <h1>Console Store</h1>
    <div id="store">
      Consoles for Sale
      <CreateItem
        v-for="console in consoles"
        :key="console.name"
        :itemCard="console"
      />
    </div>
  </div>
</template>
