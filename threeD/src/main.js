// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './locale/index'
import Vuex from 'vuex'
import store from './store/index'
import {getRequest,postAjaxRequest,deleteRequest} from './axios/index'

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false
//挂载全局使用
Vue.prototype.getRequest=getRequest;
Vue.prototype.postAjaxRequest=postAjaxRequest;
Vue.prototype.deleteRequest=deleteRequest;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //路由
  i18n,  //国际化
  store, //仓库
  components: { App },
  template: '<App/>'
})
