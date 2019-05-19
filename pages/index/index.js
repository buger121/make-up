//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    searchTitle: "搜索"
  },

  search(){
    wx.navigateTo({
      url: '../../packageA/pages/search/search',
    })
  },

  shareDetail(){
    wx.navigateTo({
      url: '../../packageA/pages/share/share',
    })
  },

  swiperDetail(){
    wx.navigateTo({
      url: '../../packageA/pages/swiper/swiper',
    })
  },

  category(){
    wx.navigateTo({
      url: '../../packageA/pages/category/category',
    })
  },

  brands() {
    wx.navigateTo({
      url: '../../packageA/pages/brands/brands',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})