<script setup>
defineProps({
  id: Number,
  title: String,
  imgUrl: String,
  price: Number,
  isFavorite: {
    type: Boolean,
    default: false,
  },
  isAdded: {
    type: Boolean,
    default: false,
  },
  onClickAdd: Function,
  onClickFavorite: Function,
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 md:p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      v-if="onClickFavorite"
      @click="onClickFavorite"
      :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
      class="absolute top-4 left-4 w-6 md:w-8"
    />
    <img :src="imgUrl" alt="Sneakers" class="w-24 h-24 mx-auto md:w-auto md:h-auto" />
    <p class="mt-2 text-sm md:text-base">{{ title }}</p>

    <div class="flex justify-between mt-3 md:mt-5">
      <div class="text-xs md:text-sm">
        <span class="text-slate-400 mr-1 md:mr-2">Цена:</span>
        <b>{{ price }} руб.</b>
      </div>

      <img
        v-if="onClickAdd"
        @click="onClickAdd"
        :src="isAdded ? '/checked.svg' : '/plus.svg'"
        alt="Add"
        class="w-6 h-6"
      />
    </div>
  </div>
</template>
