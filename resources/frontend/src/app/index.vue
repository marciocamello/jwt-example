<template>
  <div>
    <router-view></router-view>
    <div
      class="notification-wrapper"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-3 pull-right">
            <alert
              v-for="notification in $store.state.notification.all"
              :contextualStyle="notification.type"
              :message="notification.message"
              :id="notification.id"
              :close-function="deleteNotification"
            ></alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */
  import store from './store';
  import { router, echo } from './../bootstrap';
  import loader from './utils/loader';
  import postService from './services/post';
  import accountService from './services/account';
  import postTransformer from './transformers/post';

  export default {
    /**
     * The store
     */
    store,

    /**
     * The router
     */
    router,

    /**
     * Fires when the app is loaded
     */
    mounted() {
      // If the user is authenticated,
      // fetch the data from the API
      if (this.$store.state.auth.authenticated) {
        postService.all();
        accountService.find();

        echo.channel('posts')
          .listen('PostHasBeenCreated', event => {
            store.dispatch('addPost', postTransformer.fetch(event.post));
          })
          .listen('PostHasBeenDeleted', event => {
            store.dispatch('removePost', event.postId);
          });
      }
    },

    /**
     * Components being used
     */
    components: {
      alert: loader.component('alert'),
    },

    methods: {
      deleteNotification(id) {
        this.$store.dispatch('deleteNotification', id);
      },
    },
  };
</script>
