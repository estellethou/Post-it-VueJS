import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store/index.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
		this.$store.commit('initialiseStore');
  },
  render: h => h(App),
}).$mount('#app')

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});
