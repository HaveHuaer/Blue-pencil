// main.js 是入口文件

// 导入 vue 模块
import Vue from "vue";
// 导入App.vue 的页面(他要挂载在public/index/html的div#app里面)
import App from "./App.vue";
// 导入路由对象
import router from "./router";
// 导入数据状态管理对象
import store from "./store";


// 设置当前环境
Vue.config.productionTip = false;

// //按需引入elementUI
import {
  PageHeader,
  Row,
  Col,
  Card,
  Image,
  InfiniteScroll
} from 'element-ui';

Vue.use(PageHeader);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Image);
Vue.use(InfiniteScroll);
new Vue({
  // 使用路由 (vue-router)
  router,
  // 使用数据状态管理 vuex
  store,
  // 默认渲染加载哪个页面
  render: (h) => h(App),
}).$mount("#app"); // 挂载点,配置el:"#app"
