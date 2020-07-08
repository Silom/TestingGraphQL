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
import { getLottoNumbers } from '../service/lotto'

export default Vue.extend({
  components: { NumberBlock },
  data() {
    return {
      results: new Array(5)
    }
  },
  mounted() {
    getLottoNumbers().then(data => {
      // Someone might need to tell me how to display all of those numbers.
      // Anyway the component is rather simple and can be extended by the length of this array.
      // If any theme is required for special numbers, we could add this option here as well ({ value: '12', theme: 'default})
      this.resultStepper([...data.data.draw.draws[0].numbers])
    })
  },
  methods: {
    resultStepper(results: Array<number>) {
      const baseTimeGapMs = 200
      results.map((m, i) => {
        const makeCb = (m: number, i: number) => {
          return () => {
            this.results[i] = m
            this.$forceUpdate()
            // One of the reason why vue is still in child boots
            // There is some Bug/Design issue with Vue obsevers, they dont look deep..
            // And in comparisment with react this would not have been an issue
            // Its not always smart to jump onto the new horse right away
            // In this case we use data and we would need to set a watcher
            // which would handle the update with the option deep.
            // That way we can update manually, or you do it like me and update the view
            // - which is fine as long as it is small. Not recommended anyway.
          }
        }
        setTimeout(makeCb(m, i), baseTimeGapMs * (i + 1))
      })
    }
  }
})
</script>

<style lang="less" scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > * {
    margin: 10px;
  }
}
</style>