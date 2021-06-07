import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Asset from '../views/Asset.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
