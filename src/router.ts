import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './Views/LoginForm.vue';
import HomePage from './Views/HomePage.vue';
import ProfilePage from './Views/ProfilePage/ProfilePage.vue';
import { Component } from 'lucide-vue-next';
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/home',
    name :'home',
    component: HomePage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
