import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "destination Detail.vue" */ '../views/DestinationDetails.vue'
      ),
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () => import('../views/ExperienceDetails.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active-class',
  routes,
});

export default router;
