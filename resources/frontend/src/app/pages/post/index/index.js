/* ============
 * Post Index Page
 * ============
 */

import loader from './../../../utils/loader';
import postService from './../../../services/post';

export default {
  computed: {
    limit: {
      get() {
        return this.$store.state.post.pagination.limit;
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
