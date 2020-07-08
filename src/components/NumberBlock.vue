<template>
  <div :class="value ? 'flip' : ''" :data-testid="testId.number">
    <span class="title">{{ title }}</span>

    <b class="card">
      <b class="top">{{ value }}</b>
      <b class="bottom"></b>
      <b class="back">
        <b class="bottom" :data-value="value"></b>
      </b>
    </b>
  </div>
</template>

<script lang="ts">
import { TestIds } from '../consts'
import Vue from 'vue'

export default Vue.extend({
  name: 'number-block',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      testId: TestIds['LottoNumbers']
    }
  }
})
</script>

<style scoped lang="less">
@halfHeight: 0.72em;
@borderRadius: 0.15em;

.card {
  display: block;
  position: relative; 
  padding-bottom: @halfHeight;
  font-size: 4em;
  line-height: 0.95;
}

.top,
.bottom,
.back::before,
.back::after {
  display: block;
  height: @halfHeight;
  color: #ccc;
  background: #222;
  padding: 0.25em 0.25em;
  border-radius: @borderRadius @borderRadius 0 0;
  backface-visiblity: hidden;
  transform-style: preserve-3d;
  min-width: 150px;
  max-width: 200px;
  transform: translateZ(0);
}

.bottom { 
  color: #FFF;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939; 
  border-radius: 0 0 @borderRadius @borderRadius; 
  pointer-events: none;
  overflow: hidden;
}

.bottom::after {
  display: block;
  margin-top: -@halfHeight;
}

.back::before,
.bottom::after {
  content: attr(data-value);
}

.back {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}

.back::before {
  position: relative;
  z-index: -1;
  overflow: hidden;
}

.flip .back::before {
  animation: flipTop 0.3s cubic-bezier(.37,.01,.94,.35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}

.flip .back .bottom {
  transform-origin: center top;
  animation-fill-mode: both;
  animation: flipBottom 0.6s cubic-bezier(.15,.45,.28,1);// 0.3s; 
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }
  0%, 99% {
    opacity: 0.99;
  }
  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes flipBottom {
  0%, 50% {
    z-index: -1;
    transform: rotateX(90deg);
    opacity: 0;
  }
  51% {
    opacity: 0.99;
  }
  100% {
    opacity: 0.99;
    transform: rotateX(0deg);
    z-index: 5;
  }
}
</style>