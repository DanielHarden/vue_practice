// import './css/index.css'

import Vue from '../node_modules/vue/dist/vue.js'

import app from './components/App.vue'

import  '../node_modules/bootstrap/dist/js/bootstrap.js'
import  '../node_modules/bootstrap/dist/css/bootstrap.css'

import $ from 'jquery'

import axios from 'axios'

Vue.prototype.$ajax = axios;

// console.log('ok');
// console.log('wahaha');

import router from './router.js'

var vm = new Vue({
	el: '#app',

	render: function(createElements) {
		return createElements(app);
	}, 
	router
})

