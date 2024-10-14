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
    evaluation: "我不是小黑子"
  },

  submit:function(e) {
      console.log(JSON.stringify(e.detail.value))
      wx.request({
        url: 'http://10.6.232.141:8080/miniProgram/InvestigateServlet',
        method: "post",
        data: JSON.stringify(e.detail.value),
        header: {
            'Content-type': 'application/json'
        },
        success:function(res) {
            console.log('success', res)
        },
        fail:function(res) {
            console.log('fail', res)
        }
      })
  }
})