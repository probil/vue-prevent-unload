export default {
  name: 'PreventUnload',
  abstract: true,
  render: () => null,
  props: {
    when: Boolean,
    message: String,
  },
  methods: {
    handleUnload(event) {
      if (!this.when) return;
      if (typeof this.message === 'string') {
        event.returnValue = this.message;
        return this.message;
      }
      if (!this.message) {
        event.preventDefault();
      }
    },
  },
  mounted() {
    window.addEventListener('beforeunload', this.handleUnload);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.handleUnload);
  },
}
