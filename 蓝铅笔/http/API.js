const baseurl = "https://m.lanqb.com/api"
module.exports = {
  // 首页数据
  // 轮播图
  banner: baseurl + "/home/banner?type=m&local_code=10&order=weight&limit=6",
  // 热门推荐
  new: baseurl + "/home/series",
  // 大触直播
  daniu:baseurl + "/daniu?link=paging&live=3&is_live=1&limit=3&page=1",
  // 素材下载
  news: baseurl + "/news?type=sucai&page=1",
  // 问答专区
  heat: baseurl +"/home/heat/qa-list",

  // 教程数据
  // logo图
  logoImg:baseurl +"/series/banners?type=m&position=3&locality=0&order=weight&limit=6",
  // 更多筛选
  morecourse: baseurl + "/course-group-list",
  // 全部数据
  allcourse : baseurl + "/course/video",
  // 入门数据
  leave : baseurl + "/course/video?level=1",


  // 网校数据
  // 网路=>小轮播图
  smallBanner : baseurl + "/home/banner?type=m&local_code=20&limit=6&order=weight",
  // 热门课程推荐
  hotClass : baseurl + "/school/professionals?limit=4&teacher_show=1",
  // 学院作品展会
  stuShow : baseurl + "/school/works?sort=-top_weight&limit=9"
}