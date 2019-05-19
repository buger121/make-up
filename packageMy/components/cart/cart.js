// components/cart/cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checkImg: String,
    imgPath: String,
    desc: String,
    args: String,
    price: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    amount: "1"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    check(){
      this.triggerEvent("check");
    },
    deduct() {
      let amount = this.data.amount;
      if(amount > 1){
        amount--;
      }
      this.setData({
        amount : amount
      })
      this.triggerEvent("deduct");
    },
    add() {
      let amount = this.data.amount;
      amount++;
      this.setData({
        amount:amount
      })
      this.triggerEvent("add");
    }

    
  }
})
