import Vue from 'vue';
import accountService from './../account';
import postService from './../post';
import store from './../../store';

const success = ({ data }) => {
  store.dispatch('login', data.token);
  postService.all();
  accountService.find();
  store.dispatch('addNotification', {
    type: 'success',
    message: 'Login successful!',
  });
  Vue.router.push({
    name: 'post.index',
  });
};

const failed = () => {
  store.dispatch('addNotification', {
    type: 'danger',
    message: 'Login failed!',
  });
};

export default (user) => {
  Vue.http
    .post('auth', user)
    .then(success, failed);
};
