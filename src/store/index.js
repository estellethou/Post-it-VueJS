import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import postit from './modules/postit.js'

Vue.use(Vuex);

export default new Vuex.Store({
    name: "store",
    modules: {
        postit
    },
    state: {
        version: '',
    },
    mutations: {
		initialiseStore(state) {
			if(localStorage.getItem('store')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		}
	},
})






