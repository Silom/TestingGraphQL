<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/lotto-numbers">Current Lotto Numbers</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
*, *:before, *:after {
  box-sizing: border-box;
}
</style>