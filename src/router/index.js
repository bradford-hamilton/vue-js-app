import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import SweetPage from '@/components/SweetPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/sweet-page',
      name: 'SweetPage',
      component: SweetPage,
    },
  ],
});
