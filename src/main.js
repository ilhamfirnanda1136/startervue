
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import CoreuiVue from '@coreui/vue'
import Navbar from './components/Navbar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '~@coreui/coreui/scss/coreui'

Vue.use(VueRouter)
Vue.use(CoreuiVue)
Vue.component('Navbar',Navbar)

Vue.config.productionTip = false

const router = new VueRouter({
  mode : 'history',
  routes
})

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title}`
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
