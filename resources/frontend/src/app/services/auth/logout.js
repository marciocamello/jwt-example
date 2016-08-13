import Vue from 'vue';
import store from './../../store';

export default () => {
  store.dispatch('logout');
  store.dispatch('clearAccount');
  store.dispatch('clearPost');
  store.dispatch('addNotification', {
    type: 'success',
    message: 'Logout successful!',
  });
  Vue.router.push({
    name: 'login.index',
  });
};
