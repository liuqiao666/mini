import Vue from 'vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import jquery from 'jquery'
import routes from './routes.js'
import'../css/app.css'
import index from './components/index.vue'

Vue.use(VueRouter)

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.common = {}

Vue.prototype.$jq = require('jquery')

const router = new VueRouter({
  routes: routes(Vue)
})

const app = new Vue({
	router,
	el: '#app',
	render: h => h(index)
})