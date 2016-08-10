/* ============
 * Alert Component
 * ============
 */

export default {
  props: {
    contextualStyle: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    closeFunction: {
      type: Function,
      required: true,
    },
  },

  methods: {
    /**
     * Method used to fire the countdown
     */
    startTimer() {
      setTimeout(() => {
        this.closeFunction(this.id);
      }, 5000);
    },
  },

  computed: {
    classNames() {
      const classNames = ['alert'];

      classNames.push(`alert-${this.contextualStyle}`);

      return classNames;
    },
  },

  mounted() {
    this.startTimer();
  },
};
