// index.js
// 获取应用实例
const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")

Page({
  data: {
    swiper_img: [],
    text_list: [{
        text: "免费教程",
        img: "../../image/h9-b_1806.png"
      },
      {
        text: "专业课程",
        img: "../../image/h12-g_1806.png"
      },
      {
        text: "大触直播",
        img: "../../image/h2-p_2212.png"
      },
      {
        text: "教程兑换",
        img: "../../image/h10-o_1806.png"
      },
      {
        text: "学员成长",
        img: "../../image/h11-c_2212.png"
      },
      {
        text: "每日一画",
        img: "../../image/h11-c_1811.png"
      },
      {
        text: "素材下载",
        img: "../../image/h14-r_2212.png"
      },
      {
        text: "社区问答",
        img: "../../image/h5-p_2211.png"
      }
    ],
    dachu_name: "",
    dachu_img: "",
    dcTwo_name: "",
    tuijian:"",
    answer:"",
    sucai:"",
    logo_img:[
      {img:"../../image/footer-icon1_124x47.png"},
      {img:"../../image/footer-icon5@2x.png"},
      {img:"../../image/footer-icon2@2x.png"},
      {img:"../../image/footer-icon3@2x.png"},
      {img:"../../image/icon8.png"}

    ]
  },
  // 事件处理函数
  onLoad() {
    http(API.banner).then(res => {
      this.setData({
        swiper_img: res.data.data
      })
    })
    http(API.daniu).then(res => {
      this.setData({
        dachu_name: res.data.live,
        dcTwo_name: res.data.course.data
      })
    })
    http(API.new).then(res => {
      this.setData({
        tuijian:res.data
      })
    })
    http(API.heat).then(res => {
      this.setData({
        answer:res.data
      })
    })
    http(API.news).then(res => {
      this.setData({
        sucai:res.data.data
      })
    })
  }
})