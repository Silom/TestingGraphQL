<template>
  <div class="application">
    <nav>
      <router-link class="navlink" active-class="active" exact :to="selectUrl('Home')" :data-testid="testId.linkHome">Home</router-link>
      <router-link class="navlink" active-class="active" exact :to="selectUrl('LottoNumbers')" :data-testid="testId.linkNumbers">Current Lotto Numbers</router-link>
    </nav>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TestIds } from '../consts'
import { selectUrl } from '../utils/Selector'

export default Vue.extend({
  data() {
    return {
      testId: TestIds['Nav']
    }
  },
  methods: {
    selectUrl
  }
})
</script>

<style scoped lang="less">
nav {
  padding: 10px;
  width: 100%;
  text-align: center;
}
.navlink {
  margin: 10px;
  text-decoration: none;
  color: gray;

  &.active {
    color: pink;
    border-bottom: 1px solid pink;
  }
}
.content-wrapper {
  padding: 20px;
  position: relative;
  overflow-x: none;
  overflow-y: auto;
}
.application {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
// Global styles (TODO move this)
*, *:before, *:after {
  box-sizing: border-box;
}
</style>