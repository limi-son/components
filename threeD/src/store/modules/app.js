import {Router} from '../../router/appRouter'
const app={
    state: {
        lang:'', //语言环境
        menuList: [...Router], //菜单
    },
    mutations: {
        updateMenuList(state,routes){
            state.menuList = routes; //储存菜单
        },
        switchLang(state, lang) {
            state.lang = lang; //储存语言环境
            Vue.config.lang = lang; //更改语言环境
        }
    }
}

export default app