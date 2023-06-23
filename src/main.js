// 项目入口文件
// 引入vue
import Vue from 'vue'
// 引入组件，是所有组件的父组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建实例对象vm
new Vue({
  el:'#app',
  render: h => h(App),
})
// .$mount('#app')
