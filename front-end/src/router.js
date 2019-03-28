import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'

import account from './components/Account.vue'
import login from './components/Login.vue'
import register from './components/Register.vue'
import goodslist from './components/GoodsList.vue'

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [
	    {
	    	path: '/', 
	        component: account,
	        children: [
	            {path: 'login', component: login},
	            {path: 'register', component: register}
	            // 注意子组件路径不能加斜杠
	        ]
	    },
	    {path: '/goodslist', component: goodslist}
	]
})

export default router