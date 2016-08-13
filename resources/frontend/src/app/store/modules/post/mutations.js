import { state as baseState } from './state';
import {
  ADD_POST,
  REMOVE_POST,
  FETCH_POSTS,
  CLEAR_POST,
} from './../../mutation-types';

export const mutations = {
  [ADD_POST](state, post) {
    state.all.push(post);
  },

  [REMOVE_POST](state, postId) {
    const post = state.all.find(p => p.id === postId);
    const index = state.all.indexOf(post);

    if (index !== -1) {
      state.all.splice(index, 1);
    }
  },

  [FETCH_POSTS](state, { posts, pagination }) {
    state.all = posts;
    state.pagination = pagination;
  },

  [CLEAR_POST](state) {
    state.all = baseState.all;
    state.pagination = baseState.pagination;
  },
};
