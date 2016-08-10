/* ============
 * Vuex Store
 * ============
 *
 * The store of the application
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import * as actions from './actions';
import auth from './modules/auth';
import account from './modules/account';
import notification from './modules/notification';
import post from './modules/post';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * Assign the actions to the store
   */
  actions,

  /**
   * Assign the modules to the store
   */
  modules: {
    auth,
    account,
    notification,
    post,
  },

  /**
   * If strict mode should be used
   */
  strict: debug,

  /**
   * Plugins for Vuex
   */
  plugins: debug ? [createLogger()] : [],
});
