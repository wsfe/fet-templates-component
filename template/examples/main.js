import Vue from 'vue'
import App from './App.vue'
import Component from '../src'
import '../src/styles/index.less'

Vue.config.productionTip = false

Vue.use(Component)

new Vue({
  render: h => h(App),
}).$mount('#app')
