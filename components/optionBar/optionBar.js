// components/optionBar/optionBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    imgPath: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    borderStyle: {
      type: String,
      value: ''
    },
    imageStyle: {
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
    optionDetail: function() {
      this.triggerEvent("optionDetail");
    }
  },

  options: {
    addGlobalClass: true,
  }
})
