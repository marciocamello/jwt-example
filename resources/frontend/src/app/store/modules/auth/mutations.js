import Vue from 'vue';
import {
  LOGOUT,
  CHECK_AUTHENTICATION,
  LOGIN,
} from './../../mutation-types';

export const mutations = {
  [CHECK_AUTHENTICATION](state) {
    state.authenticated = !!localStorage.getItem('id_token');
    if (state.authenticated) {
      const bearer = `Bearer ${localStorage.getItem('id_token')}`;

      Vue.echo.options.auth.headers.Authorization = bearer;
      Vue.http.headers.common.Authorization = bearer;
    }
  },

  [LOGIN](state, token) {
    const bearer = `Bearer ${token}`;

    state.authenticated = true;
    localStorage.setItem('id_token', token);
    Vue.echo.options.auth.headers.Authorization = bearer;
    Vue.http.headers.common.Authorization = bearer;
  },

  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem('id_token');
    Vue.echo.options.auth.headers.Authorization = null;
    Vue.http.headers.common.Authorization = null;
  },
};
