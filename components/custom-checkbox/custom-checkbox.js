// components/custom-checkbox.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // testValue: {
    //   type: String,
    //   value: "default testValue"
    // },
    items: {
      type: Object,
      value: [
        {value: 'CHN', name: '中国', checked: 'true'},
        {value: 'USA', name: '美国'},
        {value: 'BRA', name: '巴西'},
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    testValue: "data default testValue"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange(event) {
      console.log(event)
      this.triggerEvent('custCheckboxChange', event.detail.value)
    }
  }
})