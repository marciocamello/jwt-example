import * as types from './mutation-types';

// Account
export const fetchAccount = ({ commit }, account) => {
  commit(types.FETCH_ACCOUNT, account);
};

export const clearAccount = ({ commit }) => {
  commit(types.CLEAR_ACCOUNT);
};

// Auth
export const login = ({ commit }, token) => {
  commit(types.LOGIN, token);
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
};

export const checkAuthentication = ({ commit }) => {
  commit(types.CHECK_AUTHENTICATION);
};

// Notification
export const addNotification = ({ commit }, notification) => {
  commit(types.ADD_NOTIFICATION, notification);
};

export const deleteNotification = ({ commit }, notification) => {
  commit(types.DELETE_NOTIFICATION, notification);
};

// Post
export const addPost = ({ commit }, post) => {
  commit(types.ADD_POST, post);
};

export const removePost = ({ commit }, postId) => {
  commit(types.REMOVE_POST, postId);
};

export const fetchPosts = ({ commit }, { posts, pagination }) => {
  commit(types.FETCH_POSTS, { posts, pagination });
};

export const clearPost = ({ commit }) => {
  commit(types.CLEAR_POST);
};
