import { createRouter, createWebHistory } from 'vue-router';
import RepairsPage from '@/views/RepairsPage.vue';
import HomeView from '@/views/HomeView.vue';

import GuitarsPage from '@/views/GuitarsPage.vue';
import AccessoriesPage from '@/views/AccessoriesPage.vue';
import LessonsPage from '@/views/LessonsPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import AllGuitars from '@/views/AllGuitars.vue';

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
    children: [
      {
        path: '',
        component: AllGuitars,
      },
      {
        path: ':id',
        component: ProductPage,
      },
    ],
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
  {
    path: '/repairs',
    name: 'repairs',
    component: RepairsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
