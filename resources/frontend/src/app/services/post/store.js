import Vue from 'vue';
// import allPosts from './all';
import store from './../../store';

const success = () => {
  // allPosts();
  store.dispatch('addNotification', {
    type: 'success',
    message: 'The post has been created!',
  });
  window.router.push({
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
