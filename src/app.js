// Basic setup and configuration
import Vue from 'vue'
import VueRouter from 'vue-router'

import NavLayout from './area/NavLayout.vue'
import HomeArea from './area/Home.vue'
import LottoResultArea from './area/LottoResult.vue'

Vue.use(VueRouter)

const router = new VueRouter({ 
  routes: [
    { path: '/', component: HomeArea },
    { path: '/lotto-numbers', component: LottoResultArea }
  ], 
  mode: 'history' 
})

// App Frame
const $app = document.createElement('div')
$app.id = 'app'
document.body.appendChild($app)

new Vue({
  el: '#app',
  router,
  render: h => h(NavLayout)
})
