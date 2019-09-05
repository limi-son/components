import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
//elementui语言包
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
//个人自定义语言包
import zhCN from './lang/zhCN'
import enUS from './lang/enUS'

Vue.use(VueI18n);
Vue.use(ElementUI);

const i18n = new VueI18n({
  //初始语言设置
   locale:'zh',
  // locale: sessionStorage.getItem('language')||'en',
   messages:{
     'en':Object.assign(enUS,enLocale),//将我们项目中的语言包与Element的语言包进行合并
     'zh':Object.assign(zhCN,zhLocale),
   },
});

Vue.use(ElementUI,{
  i18n:(key,value) =>i18n.t(key,value) //重点！！在注册Element时设置i18n的处理方法
});


export default i18n
