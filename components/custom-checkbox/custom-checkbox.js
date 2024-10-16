// components/custom-checkbox.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    label: {
        type: String,
        value: ''
    },

    position: {
        type: String,
        value: ''
    },

    checked: {
        type: Boolean,
        value: false
    }
  },

  observers: {
    checked: function(newChecked) {
        this.setData({isChecked: newChecked})
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isChecked: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateChecked() {
        this.setData({isChecked: !this.data.isChecked})
    }
  }
})