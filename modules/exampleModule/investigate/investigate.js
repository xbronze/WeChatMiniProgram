// pages/investigate/investigate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "张三",
    gender:[
        {name: "男", value: "0", checked: true},
        {name: "女", value: "1", checked: false},
        {name: "其他", value: "2", checked: false}
    ],
    hobbies: [
        {name: "唱", value: "sing", checked: true},
        {name: "跳", value: "dance", checked: true},
        {name: "Rap", value: "rap", checked: true}
    ],
    address: "河南省信阳市浉河区长安路237号",
    selectorItems: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },

  pickerHandler(e) {
    this.setData({pickerValue: this.data.selectorItems[e.detail.value]})
  },

  submit:function(e) {
      const index = e.detail.value.age
      e.detail.value.age = this.data.selectorItems[index]
      wx.showLoading({
        title: '接口请求中',
        mask: true
      })

      console.log(JSON.stringify(e.detail.value))
      wx.request({
        url: 'http://localhost:8080/chapter7experiment/questionnaire/add',
        method: "post",
        data: JSON.stringify(e.detail.value),
        // data: e.detail.value,
        header: {
            'Content-type': 'application/json'
            // 'Content-type': 'application/x-www-form-urlencoded'
        },
        success:(res) => {
          console.log('success', res)
        },
        fail:(res) => {
            console.log('fail', res)
        },
        complete:(res) => {
          console.log('complete:', res)
          wx.hideLoading()
        }
      })
  }
})