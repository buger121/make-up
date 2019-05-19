// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    searchTitle:'MAC',
    items: [
      { title: "口红热销榜", imgPath: "../../images/category/lipstick.png" },
      { title: "腮红热销榜", imgPath: "../../images/category/blusher.png" },
      { title: "眼影热销榜", imgPath: "../../images/category/eyeshadow.png" },
      { title: "高光热销榜", imgPath: "../../images/category/highlight.png" },
      { title: "眉部产品热销榜", imgPath: "../../images/category/eyebrow.png" }
    ],
    products: [
      {
        desc: "  Girlcult屁桃联名腮红情绪腮红暗涌晒红女盘橘色闪眼影膏两用高光",
        imgPath: "../../images/shop/card1.jpg",
        price: "98"
      },
      {
        desc: "  colorpop日落盘卡拉泡泡",
        imgPath: "../../images/shop/card2.jpg",
        price: "133"
      },
      {
        desc: "  Makeup Revolution渐变腮红高光一体盘正品裸妆晒红眼影修容",
        imgPath: "../../images/shop/card4.jpg",
        price: "50"
      },
      {
        desc: "Colourpop x Zoella 春季合作款眼影盘 唇釉腮红",
        imgPath: "../../images/shop/card5.jpg",
        price: "149"
      },
      {
        desc: "Givenchy/纪梵希高定香榭哑光唇釉小羊皮气垫唇釉",
        imgPath: "../../images/shop/card6.jpg",
        price: "268"
      },
      {
        desc: "LEEMEMBER荔萌/荔曼 曲奇双色腮红雾感蜜桃甜橙树莓苹果",
        imgPath: "../../images/shop/card7.png",
        price: "37"
      },
    ]
  },

  detail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/packageShop/pages/detail/detail?id=' + id,
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