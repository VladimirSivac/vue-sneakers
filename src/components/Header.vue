<script setup>
defineProps({
  totalPrice: Number,
})

const emit = defineEmits(['openCart'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-4 py-4 md:px-10 md:py-8">
    <router-link to="/">
      <div class="flex items-center gap-3 md:gap-4">
        <img src="/logo.png" alt="Logo" class="w-8 md:w-10" />
        <div>
          <h2 class="text-base md:text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-400 text-xs md:text-sm hidden sm:block">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-4 md:gap-10">
      <li
        @click="() => emit('openCart')"
        class="flex items-center gap-2 md:gap-3 text-gray-500 cursor-pointer hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" class="w-5 md:w-6" />
        <span class="text-sm md:text-base">{{ totalPrice }} руб.</span>
      </li>

      <router-link to="/favorites">
        <li class="flex items-center gap-2 md:gap-3 text-gray-500 cursor-pointer hover:text-black">
          <img src="/heart.svg" alt="Heart" class="w-5 md:w-6" />
          <span class="hidden sm:block">Закладки</span>
        </li>
      </router-link>

      <li class="flex items-center gap-2 md:gap-3 text-gray-500 cursor-pointer hover:text-black">
        <img src="/profile.svg" alt="Profile" class="w-5 md:w-6" />
        <span class="hidden sm:block">Профиль</span>
      </li>
    </ul>
  </header>
</template>
