<script setup>
import axios from 'axios'
import { ref, inject, computed } from 'vue'

import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
})

const { cart, closeDrawer } = inject('cart')

const isOrderCreated = ref(false)
const orderId = ref(null)

const createOrder = async () => {
  try {
    isOrderCreated.value = true
    const { data } = await axios.post(`https://fc5c342deaa503a8.mokky.dev/orders`, {
      items: cart.value,
      totalPrice: props.totalPrice.value,
    })

    cart.value = []

    orderId.value = data.id

    return data
  } catch (err) {
    console.log(err)
  } finally {
    isOrderCreated.value = false
  }
}

const cartIsEmpty = computed(() => cart.value.length === 0)
const disabledCartButton = computed(() => isOrderCreated.value || cartIsEmpty.value)
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>

  <div class="bg-white w-full md:w-96 h-full fixed right-0 top-0 z-20 p-4 sm:p-8">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пуста"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        image-url="/package-icon.png"
      />

      <InfoBlock
        v-if="orderId"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId} был принят и находится в обработке`"
        image-url="/order-success-icon.png"
      />
    </div>

    <div v-else>
      <CartItemList />

      <div class="flex flex-col gap-3 mt-5 sm:gap-4 sm:mt-7">
        <button
          :disabled="disabledCartButton"
          @click="createOrder"
          class="mt-4 bg-lime-500 w-full rounded-xl py-3 text-white cursor-pointer hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-400"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
