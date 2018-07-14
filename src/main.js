// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.styl'
// 引入admintle模板需要css的文件
import 'font-awesome/css/font-awesome.css'
import './assets/css/adminlte.css'

// 引入swiper
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
// import './assets/js/pages/dashboard.js'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入省市区联动插件
import VueAreaLinkage from 'vue-area-linkage'
import 'vue-area-linkage/dist/index.css'
// 引入datatables
import './assets/datatables/dataTables.bootstrap4.css'
import './assets/datatables/jquery.dataTables.js'
import './assets/datatables/dataTables.bootstrap4.js'
// 引入bootstrap.js
import 'bootstrap/dist/js/bootstrap.js'
// 引入admintle模板需要的js文件
import './assets/js/jquery.sparkline.min.js'
import './assets/js/adminlte.js'
import './assets/js/demo.js'
// 引入axios配置jwt文件
import AxiosPlugin from './common/AxiosPlugin.js'

Vue.use(ElementUI)
Vue.use(VueAreaLinkage)
Vue.use(AxiosPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
