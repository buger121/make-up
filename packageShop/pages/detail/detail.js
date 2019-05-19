// packageShop/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dots: false,
    id: null,
    hiddenArgs: true,
    arg: "01蜜桃曲奇",
    products:[
      {
        desc: "  Girlcult屁桃联名腮红情绪腮红暗涌晒红女盘橘色闪眼影膏两用高光",
        imgPath: [
          "../../images/shop/card1.jpg",
          "../../images/shop/card6.jpg",
          "../../images/shop/card5.jpg"
        ],
        price: "98",
        source: "浙江杭州",
        delivery:"免费",
        acount: "两件减5元",
        stock: "302",
        args:[
          { title: "01蜜桃曲奇", imgPath: "/packageShop/images/detail/d1.jpg" },
          { title: "02甜橙曲奇", imgPath: "/packageShop/images/detail/d2.jpg" },
          { title: "03树莓曲奇", imgPath: "/packageShop/images/detail/d3.jpg" },
          { title: "04苹果曲奇", imgPath: "/packageShop/images/detail/d4.jpg" },
        ]
      },
      {
        desc: "colorpop日落盘卡拉泡泡",
        imgPath: [
          "../../images/shop/card2.jpg",
          "../../images/shop/card4.jpg",
          "../../images/shop/card7.png"
        ],
        price: "133",
        source: "广州深圳",
        delivery: "免费",
        acount: "两件减5元",
      }
    ],
  },

  optionDetail(){
    this.setData({
      hiddenArgs: false
    })
  },
  sure() {
    this.setData({
      hiddenArgs:true
    })
  },
  chosen(e) {
    let products = this.data.products;
    let id = this.data.id;
    let arg = products[id].args[e.detail].title
    this.setData({
      arg: arg
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
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