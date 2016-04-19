new Vue({
  el: '#changelog',

  data: {
    changelog: []
  },

  ready: function() {
    this.fetchChangelog();
  },

  methods: {

    fetchChangelog: function() {
      this.$set('changelog', [{
        id: 1,
        date: '2016-04-12',
        name: 'Sydney 4.1',
        features: 'Each asynchronous API function now returns a Promise which can optionally be used instead of providing an onComplete callback.',
        bugfix: 'Fixed an issue causing authWithOAuthRedirect to fail when used with AngularJS html5 mode.'
      }]);
    },

    addRelease: function() {
      if (this.release.name) {
        this.changelog.push(this.release);
        this.release = {};
      }
    }

  }
});
