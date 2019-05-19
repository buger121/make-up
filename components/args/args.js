// components/args/args.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    args: {
      type: Array,
      value: []
    },
    price: {
      type: String,
      value: ''
    },
    stock: {
      type: String,
      value: ''
    },
    hiddenArgs: {
      type: Boolean,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex: 0,
    bgColor: "#fff"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chosen(e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        selectIndex:index,
        bgColor:"#bbb"
      })
      this.triggerEvent("chosen", this.data.selectIndex);
    },
    sure: function () {
      this.triggerEvent("sure")
    }
  }
})
