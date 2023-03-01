// index.js
// 获取应用实例
const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnList: [{
        text: "全部课程",
        img: "../../image/h1-b_2211.png"
      },
      {
        text: "直播班",
        img: "../../image/h2-o_2211.png"
      },
      {
        text: "特训班",
        img: "../../image/h3-p_2211.png"
      },
      {
        text: "入门班",
        img: "../../image/h4-g_2211.png"
      },
      {
        text: "学习问答",
        img: "../../image/h5-p_2211.png"
      },
      {
        text: "学员作业",
        img: "../../image/h6-r_2211.png"
      },
      {
        text: "怎样学习",
        img: "../../image/h7-y_2211.png"
      },
      {
        text: "关于我们",
        img: "../../image/h8-c_2211.png"
      }

    ],
    swiperImg: [],
    // 右侧热门推荐
    hotTuiJ: [{
        cont: " 坚持画画，领高额奖学金"
      },
      {
        cont: " 30天学会用ipad画插画"
      },
      {
        cont: " 日系插画，怎么上手"
      },
      {
        cont: " 重磅！日系插画直播教学"
      },
    ],
    // 推荐图片
    tuJimg:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    http(API.smallBanner).then(res => {
      this.setData({
        swiperImg: res.data.data
      })
    })
    http(API.hotClass).then(res => {
      console.log(res.data.data);
      this.setData({
        tuJimg:res.data.data
      })
    })
  },


})