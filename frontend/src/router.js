import Vue from 'vue';
import Router from 'vue-router';
import HelloVuetify from '@/components/HelloVuetify.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Counter from '@/components/Counter.vue';
import Carousel from '@/components/Carousel.vue';
import Users1 from '@/components/Users1.vue';
import Users2 from '@/components/Users2.vue';
import Users3 from '@/components/Users3.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/hv',
      name: 'HelloVuetify',
      component: HelloVuetify,
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/car',
      name: 'Carousel',
      component: Carousel,
    },
    {
      path: '/users1',
      name: 'Users1',
      component: Users1,
    },
    {
      path: '/users2',
      name: 'Users2',
      component: Users2,
    },
    {
      path: '/users3',
      name: 'Users3',
      component: Users3,
    },
  ],
});
