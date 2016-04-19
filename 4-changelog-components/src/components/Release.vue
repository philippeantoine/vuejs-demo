<template>
  <h2>New release</h2>
  <input type="date" v-model="release.date">
  <input type="text" placeholder="Release Name" v-model="release.name">
  <textarea placeholder="Features" v-model="release.features"></textarea>
  <textarea placeholder="Bugfix" v-model="release.bugfix"></textarea>
  <button class="tag" @click="addRelease">Save</button>
</template>

<script>
export default {
  data () {
    return {
      release: {}
    }
  },
  methods: {
    addRelease: function () {
      if (this.release.name) {
        this.$parent.changelog.push(this.release)
        this.release = {}
      }
    }
  }
}
</script>

<style scoped>
input {
  margin: 5px 0 5px -1px;
  padding: 12px;
  height: 20px;
}
input[type=date] {
  width: 39%;
}
input[type=text] {
  width: 60%;
  float: right;
}
textarea {
  width: 100%;
  padding: 5px 10px;
  border-color: lightgrey;
  margin: 5px 0 5px -1px;
}
button {
  float: right;
  background-color: rgb(131, 57, 206);
  border: none;
  list-style: 1.2;
}
</style>
