// 导入vue模块
import Vue from "vue";
// 导入vue-fouter模块
import VueRouter from "vue-router";
Vue.use(VueRouter);


// 路由配置规则
const routes = [
  {
    path:"/",
    name:"game",
    component:()=>import("../views/GameView.vue"),
    meta:{
      title:"游戏分类",
      isShowBack:false,
      isShowTaber:false
    }
  },
  {
    path:"/live",
    name:"live",
    component:()=>import("../views/LiveView.vue"),
    meta:{
      title:"在线直播",
      isShowBack:true,
      isShowTaber:true
    }
  }
];

// 创建路由对象
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 导出路由对象
export default router;
