import Vue from 'vue'
import App from './App.vue'
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name,TypeNav);
import router from "@/router";
import store from '@/store';
import {reqCategoryList} from "@/api/index";
reqCategoryList();

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
