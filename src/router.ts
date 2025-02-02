import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './Views/LoginForm.vue';
import HomePage from './Views/HomePage.vue';
import ProfilePage from './Views/ProfilePage/ProfilePage.vue';
import RegisterForm from './Views/RegisterForm/RegisterForm.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm,
  },
  {
    path: '/',
    redirect: () => {
      const isAuthenticated = localStorage.getItem('authToken');
      return isAuthenticated ? '/home' : '/login';
    },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
