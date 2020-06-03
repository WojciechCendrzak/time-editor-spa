import Vue from 'vue';

export default Vue.extend({
  computed: {
    appVersion(): string {
      return this.$store.state.appVersion;
    },
  },
});
