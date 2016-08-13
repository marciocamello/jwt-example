/* ============
 * Post Index Page
 * ============
 */

import loader from './../../../utils/loader';
import postService from './../../../services/post';
import { mapGetters } from 'vuex';


export default {
  data() {
    return {
      users: [],
    };
  },
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
    ampersandHelper(index) {
      let showAmpersand = true;

      if (index !== this.users.length - 1) {
        showAmpersand = false;
      }

      if (index === 0) {
        showAmpersand = false
      }

      return showAmpersand;
    },
    commaHelper(index) {
      let showComma = true;

      if (index === this.users.length) {
        showComma = false;
      }

      if (index === this.users.length - 1) {
        showComma = false;
      }

      if (index === 0) {
        showComma = false
      }

      return showComma;
    }
  },

  mounted() {
    Vue.echo.join('posts-presence')
      .here(users => this.users = users)
      .joining((user) => {
        this.users.push(user);
      })
      .leaving((user) => {
        const index = this.users.indexOf(user);

        if (index !== -1) {
          this.users.splice(index, 1);
        }
      });
  },

  beforeDestroy() {
    Vue.echo.leave('posts-presence');
  },

  components: {
    VLayout: loader.layout('default'),
    VPagination: loader.component('pagination'),
  },
};
