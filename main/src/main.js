import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VJsoneditor from 'v-jsoneditor'

Vue.config.productionTip = false

Vue.use(VJsoneditor)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
