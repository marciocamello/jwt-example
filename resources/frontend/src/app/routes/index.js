/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

import loader from './../utils/loader';

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Account
  {
    path: '/account',
    name: 'account.show',
    component: loader.page('account', 'show'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Post
  {
    path: '/post',
    name: 'post.index',
    component: loader.page('post', 'index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  {
    path: '/post/create',
    name: 'post.create',
    component: loader.page('post', 'create'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: loader.page('login', 'index'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },
  {
    path: '/',
    redirect: '/account',
  },
];
