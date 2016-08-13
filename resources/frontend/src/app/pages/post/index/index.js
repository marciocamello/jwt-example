/* ============
 * Post Index Page
 * ============
 */

import loader from './../../../utils/loader';
import postService from './../../../services/post';
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters({
      posts: 'allPosts',
      pagination: 'postPagination',
    }),
    limit: {
      get() {
        return this.pagination.limit;
      },
      set(value) {
        postService.all(1, value);
      },
    },
  },

  methods: {
    all(page, limit) {
      return postService.all(page, limit);
    },
    destroy(id) {
      return postService.destroy(id);
    },
  },

  components: {
    VLayout: loader.layout('default'),
    VPagination: loader.component('pagination'),
  },
};
