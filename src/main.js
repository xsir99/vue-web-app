import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from "@/router";

Vue.config.productionTip = false
import '_assets/iconfont/iconfont.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
