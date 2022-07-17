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
import OneAccessoryPage from '@/views/OneAccessoryPage.vue';
import LoginPage from '@/views/authentification/LoginPage.vue';
import RegisterPage from '@/views/authentification/RegisterPage.vue';
import CreatePage from '@/views/creation/CreatePage.vue';
import CreateChoice from '@/views/creation/CreateChoice.vue';
import CreateProduct from '@/views/creation/CreateProduct.vue';
import CreateArticle from '@/views/creation/CreateArticle.vue';

import {
  HOME_PAGE,
  GUITARS_PAGE,
  GUITARS_PAGE_DETAIL,
  ACCESSORIES_PAGE,
  ACCESSORIES_PAGE_DETAIL,
  LESSONS_PAGE,
  LESSONS_PAGE_DETAIL,
  REPAIRS_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  CREATE_PAGE,
  CREATE_PRODUCT,
  CREATE_ARTICLE,
} from '@/router/router-names';

const routes = [
  {
    path: '/',
    name: HOME_PAGE,
    component: HomeView,
  },
  {
    path: '/login',
    name: LOGIN_PAGE,
    component: LoginPage,
  },
  {
    path: '/register',
    name: REGISTER_PAGE,
    component: RegisterPage,
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
        component: OneAccessoryPage,
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
  {
    path: '/create',
    name: CREATE_PAGE,
    component: CreatePage,
    children: [
      {
        path: '',
        component: CreateChoice,
      },
      {
        path: ':creationType',
        name: CREATE_PRODUCT,
        component: CreateProduct,
      },
      {
        path: ':creationType',
        name: CREATE_ARTICLE,
        component: CreateArticle,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
