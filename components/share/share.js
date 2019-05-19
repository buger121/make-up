// components/share/share.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    username: {
      type: String,
      value: ''
    },
    imgPath: {
      type: String,
      value: ''
    },
    model: {
      type: String,
      value: ''
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    shareDetail: function(){
      this.triggerEvent("shareDetail");
    }
  }
})
