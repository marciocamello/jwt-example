import Vue from 'vue';
// import allPosts from './all';
import store from './../../store';

const success = () => {
  // allPosts();
  store.dispatch('addNotification', {
    type: 'success',
    message: 'The post has been deleted!',
  });
};

const failed = () => {
  store.dispatch('addNotification', {
    type: 'danger',
    message: 'Deleting post failed!',
  });
};

export default (id) => {
  Vue.http
    .delete(`posts/${id}`)
    .then(success, failed);
};
