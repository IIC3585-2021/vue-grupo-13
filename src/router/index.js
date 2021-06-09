import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Asset from '../views/Asset.vue';
import Favourites from '../views/Favourites.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'Asset',
    component: Asset,
  },
  {
    path: '/favourites',
    name: 'FavouritesAssets',
    component: Favourites,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
