import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import GuitarsPage from '../views/GuitarsPage.vue';
import AccessoriesPage from '../views/AccessoriesPage.vue';
import LessonsPage from '../views/LessonsPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/guitars',
    name: 'guitars',
    component: GuitarsPage,
  },
  {
    path: '/accessories',
    name: 'accessories',
    component: AccessoriesPage,
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: LessonsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
