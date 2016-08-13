import Vue from 'vue';
import store from './../../store';

const success = () => {
  store.dispatch('addNotification', {
    type: 'success',
    message: 'The post has been created!',
  });
  Vue.router.push({
    name: 'post.index',
  });
};

const failed = () => {
  store.dispatch('addNotification', {
    type: 'danger',
    message: 'Saving post failed!',
  });
};

export default (post) => {
  Vue.http
    .post('posts', post)
    .then(success, failed);
};
