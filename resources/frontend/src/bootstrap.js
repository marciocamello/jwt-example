/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application
 */


/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 */
import Vue from 'vue';
window.Vue = Vue;
Vue.config.debug = process.env.NODE_ENV !== 'production';


/* ============
 * Vue Resource
 * ============
 *
 * The plugin for Vue.js provides services for making web requests and handle
 * responses using a XMLHttpRequest or JSONP.
 */
import VueResource from 'vue-resource';
import authService from './app/services/auth';
Vue.use(VueResource);

Vue.http.headers.common.Accept = 'application/json';
Vue.http.options.root = process.env.API_LOCATION;
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // If the token is invalid
    if (response.status === 401) {
      authService.logout();
    }
  });
});


/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 */
import VuexRouterSync from 'vuex-router-sync';
import store from './app/store';
store.dispatch('checkAuthentication');


/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 */
import VueRouter from 'vue-router';
import routes from './app/routes';
Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});
router.beforeEach((route, redirect, next) => {
  if (route.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
    /*
     * If the user is not authenticated and goes to
     * an authenticated page, redirect to the login page
     */
    redirect({
      name: 'login.index',
    });
  } else if (route.matched.some(m => m.meta.guest) && store.state.auth.authenticated) {
    /*
     * If the user is authenticated and goes to
     * an guest page, redirect to the dashboard page
     */
    redirect({
      name: 'account.show',
    });
  } else {
    next();
  }
});
VuexRouterSync.sync(store, router);

window.router = router;


/* ============
 * Laravel Echo
 * ============
 *
 * Require jQuery
 */
import Echo from 'laravel-echo';

export const echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.PUSHER_KEY,
  cluster: process.env.PUSHER_CLUSTER,
});

/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 */
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;


/* ============
 * Bootstrap
 * ============
 *
 * Require bootstrap for the app
 */
require('bootstrap');
require('bootstrap/less/bootstrap.less');


/* ============
 * Styling
 * ============
 *
 * Require the application styling
 */
require('./assets/stylus/app.styl');
