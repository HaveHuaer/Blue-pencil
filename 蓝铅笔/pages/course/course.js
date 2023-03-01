const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")


// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["最新", "入门", "进阶", "免费", "图文", "兑换", "专题"],
    idnexColor: 0,
    logoImg: "",
    itemText: [],
    isTrue: false,
    itemIndex: 0,
    type: 1,
    page: 1,
    limit: 10,
    title: "",
    list:[],
    ids:0,
    course_subjects_ids:0,
    level:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    http(API.logoImg).then(res => {
      this.setData({
        logoImg: res.data.data[0].picture
      })
    })

    http(API.morecourse).then(res => {
      this.setData({
        itemText: res.data.course_subjects
      })
    })  
    this.getAll()
  },

  getAllcourse(){
    http(API.allcourse, {
      type: this.data.type,
      page: this.data.page,
      limit: this.data.limit,
      course_subjects_ids: this.data.course_subjects_ids,
      title:this.data.title,
    }).then(res => {
      if (this.data.page === 1) {
        this.setData({
          list: res.data.data,
        })
      } else {
        this.setData({
          list: this.data.list.concat(res.data.data),
        })
      }
    })

   
  },
  getLevel(){
    if (this.data.course_subjects_ids== 0 && this.data.level == 0) {
      http(API.allcourse, {
        type: this.data.type,
        page: this.data.page,
        limit: this.data.limit,
        title:this.data.title,
      }).then(res => {
        if (this.data.page === 1) {
          this.setData({
            list: res.data.data,
          })
        } else {
          this.setData({
            list: this.data.list.concat(res.data.data),
          })
        }
      })
    }else if (this.data.course_subjects_ids !== 0 && this.data.level !== 0) {
      http(API.allcourse, {
        page: this.data.page,
        limit: this.data.limit,
        level:this.data.level,
      }).then(res => {
        if (this.data.page === 1) {
          this.setData({
            list: res.data.data,
          })
        } else {
          this.setData({
            list: this.data.list.concat(res.data.data),
          })
        }
      })
    }
   
  },
  getAll(){
    http(API.allcourse, {
      type: this.data.type,
      page: this.data.page,
      limit: this.data.limit,
      title:this.data.title,
    }).then(res => {
      if (this.data.page == 1) {
        this.setData({
          list: res.data.data,
        })
      } else {
        this.setData({
          list: this.data.list.concat(res.data.data),
        })
      }
    })
  },
  onReachBottom(){
    this.setData({
      page:this.data.page + 1
    })
    if (this.data.course_subjects_ids == 0) {
      this.getAll()
    }else{
      this.getAllcourse()
    }
    if (this.data.level !== 0) {
      this.getLevel()
    }else{
      this.getAll()
    }
  },
  // 事件处理
  itemClick(e) {
    this.setData({
      idnexColor: e.target.dataset.index,
      level:e.target.dataset.index,
      page:1
    })
    if (this.data.level == 0) {
      this.getAll()
    }else{
      this.getLevel()
    }
  },

  // 伸缩高度
  AddHeight() {
    this.setData({
      isTrue: !this.data.isTrue
    })
  },

  // 点击分类 更换
  indexClick(e) {
    this.setData({
      itemIndex: e.target.dataset.index,
      course_subjects_ids:e.target.dataset.id,
      page:1
    })
    this.getAllcourse()
  },
  allIndex() {
    this.setData({
      itemIndex: 0,
      page:1
    })
    this.getAll()
  },
  TitleChange(){
    if (this.data.course_subjects_ids == 0) {
      this.getAll()
    }else{
      this.getAllcourse()
    }
  }
})