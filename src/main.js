// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store'
import store from './vuex'
// import Datatable from './vue2-datatable-component'
import Datatable from 'vue2-datatable-component'

import axios from 'axios';  
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
Vue.use(VueRx,Rx)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
