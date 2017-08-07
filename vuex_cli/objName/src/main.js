import Vue from 'vue'
import App from './App.vue'
import  router from './router/index.js'

//使用vuex状态管理工具
import Vuex from "vuex";
Vue.use(Vuex);
import storeObj from "./store/index.js"

let store = new Vuex.Store(storeObj);
console.log(store);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
