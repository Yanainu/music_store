import { createRouter, createWebHistory } from 'vue-router';
import RepairsPage from '@/views/RepairsPage.vue';
import HomeView from '@/views/HomeView.vue';

import GuitarsPage from '@/views/GuitarsPage.vue';
import GuitarsPageAll from '@/views/GuitarsPageAll.vue';
import AccessoriesPage from '@/views/AccessoriesPage.vue';
import AccessoriesPageAll from '@/views/AccessoriesPageAll.vue';
import LessonsPage from '@/views/LessonsPage.vue';
import LessonsPageAll from '@/views/LessonsPageAll.vue';
import OneProductPage from '@/views/OneProductPage.vue';
import OneLessonPage from '@/views/OneLessonPage.vue';

import {
  HOME_PAGE,
  GUITARS_PAGE,
  GUITARS_PAGE_DETAIL,
  ACCESSORIES_PAGE,
  ACCESSORIES_PAGE_DETAIL,
  LESSONS_PAGE,
  LESSONS_PAGE_DETAIL,
  REPAIRS_PAGE,
} from '@/router/router-names';

const routes = [
  {
    path: '/',
    name: HOME_PAGE,
    component: HomeView,
  },
  {
    path: '/guitars',
    name: GUITARS_PAGE,
    component: GuitarsPage,
    children: [
      {
        path: '',
        component: GuitarsPageAll,
      },
      {
        path: ':id',
        name: GUITARS_PAGE_DETAIL,
        component: OneProductPage,
      },
    ],
  },
  {
    path: '/accessories',
    name: ACCESSORIES_PAGE,
    component: AccessoriesPage,
    children: [
      {
        path: '',
        component: AccessoriesPageAll,
      },
      {
        path: ':id',
        name: ACCESSORIES_PAGE_DETAIL,
        component: OneProductPage,
      },
    ],
  },
  {
    path: '/lessons',
    name: LESSONS_PAGE,
    component: LessonsPage,
    children: [
      {
        path: '',
        component: LessonsPageAll,
      },
      {
        path: ':id',
        name: LESSONS_PAGE_DETAIL,
        component: OneLessonPage,
      },
    ],
  },
  {
    path: '/repairs',
    name: REPAIRS_PAGE,
    component: RepairsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
