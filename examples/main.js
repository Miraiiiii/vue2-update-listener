/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-28 09:47:37
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-28 11:22:30
 */
import Vue from 'vue'
import App from './App.vue'

import ListenVersion from '../lib/vue2-update-listener.umd.min'
import '../lib/vue2-update-listener.css'

Vue.config.productionTip = false

Vue.use(ListenVersion, {
  interval: 1000,
  showTest: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
