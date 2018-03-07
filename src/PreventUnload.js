export default {
  name: 'PreventUnload',
  abstract: true,
  render: () => null,
  props: {
    when: Boolean,
    message: {
      type: String,
      default: 'Changes you made may not be saved.'
    },
  },
  methods: {
    handleUnload(event) {
      if (!this.when) return;
      event.returnValue = this.message;
      return this.message;
    },
  },
  mounted() {
    window.addEventListener('beforeunload', this.handleUnload);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.handleUnload);
  },
}
