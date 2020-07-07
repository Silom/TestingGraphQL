<template>
  <div class="root">
    <template v-for="(result, i) in results">
      <number-block :key="i" :value="result" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberBlock from '../components/NumberBlock.vue'

export default Vue.extend({
  components: { NumberBlock },
  data() {
    return {
      results: new Array(6)
    }
  },
  mounted() {
    // TODO fetch results via service interface
    setTimeout(() => {
      this.results = [21, 5, 6, 32, 9, 6]
    }, 300)
  }
})
</script>

<style lang="less" scoped>
.root {
  display: flex;
  text-align: center;
  perspective: 400px;
  margin: 20px auto;  
}
</style>