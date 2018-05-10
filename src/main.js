import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import { store } from './store/store'

Vue.use(VueResource);
Vue.http.options.root = "https://stock-trader-b3fb6.firebaseio.com/";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
