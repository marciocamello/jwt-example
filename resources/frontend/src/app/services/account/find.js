import Vue from 'vue';
import accountTransformer from './../../transformers/account';
import store from './../../store';

const success = ({ data }) => {
  const account = accountTransformer.fetch(data);

  store.dispatch('fetchAccount', account);
};

const failed = () => {
  store.dispatch('addNotification', {
    type: 'danger',
    message: 'Fetching account failed!',
  });
};

export default () => {
  Vue.http
    .get('account')
    .then(success, failed);
};
