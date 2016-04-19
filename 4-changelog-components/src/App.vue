<template>
  <div class="col-sm-8 col-sm-offset-2" id="app">
    <release></release>
    <changelog  v-for="release in changelog" :release="release"></changelog>
  </div>
</template>

<script>
import Release from './components/Release'
import Changelog from './components/Changelog'

export default {
  components: {
    Release,
    Changelog
  },

  ready: function () {
    this.fetchChangelog()
  },

  methods: {

    fetchChangelog: function () {
      this.$set('changelog', [{
        id: 1,
        date: '2016-04-12',
        name: 'Sydney 4.1',
        features: 'Each asynchronous API function now returns a Promise which can optionally be used instead of providing an onComplete callback.',
        bugfix: 'Fixed an issue causing authWithOAuthRedirect to fail when used with AngularJS html5 mode.'
      }])
    }

  }
}
</script>

<style>
* {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
}
h2 {
  font-family: 'LeagueGothic', sans-serif;
  font-size: 30px;
  margin-top: 40px;
  text-transform: uppercase;
  margin-bottom: 0;
}
h2:before {
  content: '';
  display: block;
  clear: both;
  margin-top: 25px;
}

.tag {
  display: block;
  width: 90px;
  line-height: 2;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
  border-radius: 2px;
  color: white;
  font-style: normal;
  margin-top: 5px;
}

@font-face {
  font-family: "LeagueGothic";
  src: url(/static/LeagueGothic-Regular.otf);
}
@font-face {
  font-family: "Lato";
  src: url(/static/Lato-Regular.ttf);
}
</style>
