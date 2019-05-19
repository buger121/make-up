// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  addPhoto(){
    const self = this;
    wx.showModal({
      title: '',
      content: '请选择您想试色的方式',
      cancelText: '拍照',
      confirmText: '上传照片',
      success(res) {
        if (res.confirm) {
          // 上传照片
          wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album'],
            success(res) {
              const tempFilePaths = res.tempFilePaths;
              wx.navigateTo({
                url: '/packageB/pages/makeUp/makeUp?path=' + tempFilePaths
              })
            }
          })
        } else if (res.cancel) {
          //拍照
          wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['camera'],
            success(res) {
              // tempFilePath可以作为img标签的src属性显示图片
              console.log("2");
              flag = true;
              self.setData({
                getPhoto: flag
              })
            }
          })
        }
      }
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
    this.addPhoto();
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