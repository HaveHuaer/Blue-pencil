import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import  "./interceptor"

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    requestGame() {
      return new Promise(function (resolve) {
        fetch("/douyu/api/RoomApi/game", {
          // 设置请求方法
          method: "GET",
          // 请求头
          headers: {},
          // 
          // body:{}
        }).then((res) => {
          return res.json()
        }).then(res => {
          resolve(res.data)
          // console.log(res);
        })
      })
    },
    requestLive(context,{id,offset,limit}){
      return new Promise(function(resolve){
        axios.get("/douyu/api/RoomApi/live/" + id,{
          params:{
            offset,
            limit
          }
        }).then(res=>{
          resolve(res.data)
        })
      })
    }
  },
  modules: {},
});
