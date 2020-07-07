<template>
<div>
  <h2 class="title" :data-testid="testIds.title">
    Welcome Player
  </h2>
  <p class="intro">Check in your lotto numbers!</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TestIds } from '../consts'

export default Vue.extend({
  data() {
    return {
      testIds: TestIds['Home']
    }
  }
})
</script>

<style lang="less" scoped>
.title, .intro {
  width: 100%;
  text-align: center;
  color: gray;
}
</style>