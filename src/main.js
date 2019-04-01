import Vue from 'vue'
import App from './app.vue'
//关闭控制台提示功能
Vue.config.productionTip = false
//声明当前组件的类型是整个应用
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
