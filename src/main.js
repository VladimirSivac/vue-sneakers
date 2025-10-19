import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import HomePage from './pages/HomePage.vue'
import FavoritePage from './pages/FavoritePage.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/favorites', name: 'FavoritePage', component: FavoritePage },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
