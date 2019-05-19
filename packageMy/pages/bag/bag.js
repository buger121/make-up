// packageMy/pages/bag/bag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: [
      {
        imgPath:'/packageMy/images/orders/d1.jpg',
        desc: 'LEEMEMBER荔曼曲奇双色雾感腮红胭脂珠哑光蜜桃苹果色橘黄色高光',
        args: '01蜜桃曲奇',
        price: '37.00',
        number: '1',
        checked: false
      },
      {
        imgPath: '/packageMy/images/orders/d4.jpg',
        desc: 'LEEMEMBER荔曼曲奇双色雾感腮红胭脂珠哑光蜜桃苹果色橘黄色高光',
        args: '03树莓曲奇',
        price: '37.00',
        number: '1',
        checked: false
      }
    ],
    selectAll: false,
    account: '0.00',
    delivery: '0.00',
    amount: '0',
    price: '0.00'
  },

settle(){
    let amount = 0;
    let price = 0;
    let cart = this.data.cart;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].checked) {
        amount++;
        price += Number(cart[i].number) * Number(cart[i].price);
      }
    }
    this.setData({
      amount: amount,
      price: price
    })
  },

  check(e){
    let index = e.currentTarget.dataset.index;
    let cart = this.data.cart;
    let checked = !cart[index].checked;
    cart[index].checked = checked;
    let checkedAmount = 0;
    let uncheckedAmount = 0;
    for (let i = 0;i < cart.length; i++) {
      if(cart[i].checked == true) {
        checkedAmount++;
      } else {
        uncheckedAmount++;
      }
    }
    if(checkedAmount == cart.length) {
      this.setData({
        selectAll : true
      })
    }
    else {
      this.setData({
        selectAll : false
      })
    }
    this.setData({
      cart : cart
    })
    this.settle();
  },

  selectAll(){
    let selectAll = this.data.selectAll;
    let cart = this.data.cart;
    if(selectAll) {
      //选中状态-》未选中
      for(let i = 0;i < cart.length; i++) {
        cart[i].checked = false;
      }
      selectAll = !selectAll;
      this.setData({
        cart : cart,
        selectAll : selectAll
      })
    } else {
      //未选中状态-》选中
      for (let i = 0; i < cart.length; i++) {
        cart[i].checked = true;
      }
      selectAll = !selectAll;
      this.setData({
        cart: cart,
        selectAll: selectAll
      })
    }
    this.settle();
  },

  add(e){
    let cart = this.data.cart;
    let index = e.currentTarget.dataset.index;
    let number = cart[index].number;
    number++;
    cart[index].number = number;
    this.setData({
      cart : cart
    })
    this.settle();
  },

  deduct(e){
    let cart = this.data.cart;
    let index = e.currentTarget.dataset.index;
    let number = cart[index].number;
    if(number > 1) {
      number--;
    }
    cart[index].number = number;
    this.setData({
      cart: cart
    })
    this.settle();
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