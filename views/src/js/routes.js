module.exports = (Vue) => {
	const self_page = Vue.component('self_page', require('./components/self.vue'))
	const purchased = Vue.component('purchased', require('./components/purchased.vue'))
	const address = Vue.component('address', require('./components/address.vue'))
	const my_events = Vue.component('my_events', require('./components/myEvents.vue'))
	const recommend = Vue.component('recommend', require('./components/recommend.vue'))
	const did = Vue.component('did', require('./components/did.vue'))
	const doing = Vue.component('doing', require('./components/doing.vue'))
	const express = Vue.component('express', require('./components/express.vue'))
	const comfirm = Vue.component('comfirm', require('./components/comfirm.vue'))
	const boutique_detail = Vue.component('boutique_detail', require('./components/boutique_detail.vue'))
	const purchase = Vue.component('purchase', require('./components/purchase.vue'))
	const cart = Vue.component('cart', require('./components/cart.vue'))
	const apply = Vue.component('apply', require('./components/apply.vue'))
	const answer = Vue.component('answer', require('./components/answer.vue'))
	const answer_before = Vue.component('answer_before', require('./components/answer_before.vue'))
	const answer_after = Vue.component('answer_after', require('./components/answer_after.vue'))
	const boutique = Vue.component('boutique', require('./components/boutique.vue'))
	const auth = Vue.component('auth', require('./components/auth.vue'))
	const mini_style = Vue.component('mini_style', require('./components/mini_style.vue'))

	return [
		{ path: '/', redirect: '/self'},
		{ path: '/self', component: self_page},
		{ path: '/purchased', component: purchased},
		{ path: '/address', component: address},
		{ path: '/my_events', component: my_events},
		{ path: '/recommend', component: recommend},
		{ path: '/did', component: did},
		{ path: '/doing', component: doing},
		{ path: '/express', component: express},
		{ path: '/comfirm', component: comfirm},
		{ path: '/boutique_detail', component: boutique_detail},
		{ path: '/purchase', component: purchase},
		{ path: '/cart', component: cart},
		{ path: '/apply', component: apply},
		{ path: '/answer', component: answer},
		{ path: '/answer_before', component: answer_before},
		{ path: '/answer_after', component: answer_after},
		{ path: '/boutique', component: boutique},
		{ path: '/auth/:addr(cd|other)', component: auth},
		{ path: '/mini_style', component: mini_style},
	]
}