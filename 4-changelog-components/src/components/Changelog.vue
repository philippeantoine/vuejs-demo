<template>
  <h2>{{ release.date }} {{ release.name }}</h2>
  <div class="features">
    <i class="tag">Features</i>
    <p>{{ release.features }}</p>
  </div>
  <div class="bugfix">
    <i class="tag">Bugfix</i>
    <p>{{ release.bugfix }}</p>
  </div>
</template>

<script>
export default {
  props: ['release']
}
</script>

<style scoped>
.features, .bugfix {
  margin-top: 15px;
}
.features i {
  background-color: rgb(15, 151, 249);
  float: left;
}
.bugfix i {
  background-color: rgb(163, 224, 39);
  float: left;
}
.features p, .bugfix p {
  padding-left: 100px;
  line-height: 1.5;
}
/*h2 {
  color: green !important;
}*/
</style>
