<script setup>
import { ref, watch, provide, computed } from 'vue'

import Header from './components/Header.vue'
import Drawer from './components/DrawerPage.vue'

// Cart (START)
const cart = ref([])
const drawerOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
const vatPrice = computed(() => Math.round(totalPrice.value * 0.05))

const closeCart = () => {
  drawerOpen.value = false
}

const openCart = () => {
  drawerOpen.value = true
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true },
)

provide('cart', {
  cart,
  closeCart,
  openCart,
  addToCart,
  removeFromCart,
})
// Cart (END)
</script>

<template>
  <Drawer v-if="drawerOpen" :total-price="totalPrice" :vat-price="vatPrice" />

  <div class="w-[90%] max-w-7xl mx-auto bg-white rounded-xl shadow-xl mt-10 mb-10">
    <Header @open-cart="openCart" :total-price="totalPrice" />

    <div class="p-4 sm:p-6 md:p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
