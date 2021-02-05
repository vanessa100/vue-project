import Vue from 'vue'

Vue.config.productionTip = false


import app from './App.vue'


new Vue({
  el: '#app',
  render: c => c(app),
  store
})