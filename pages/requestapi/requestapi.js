// pages/requestapi/requestapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: null
  },

  getData() {
    wx.showLoading({
      title: '正在请求数据',
      // 是否展示透明蒙层，防止触摸穿透
      mask: true
    })

      wx.request({
        url: 'http://10.6.232.141:8080/demo111/helloServlet',
        method: "GET",
        data: {},
        success: (res) => {
            if(res.data.code === 200) {
                this.setData({result:res.data.data})
            }
        },
        fail: (err) => {
            console.log(err)
        },
        complete: (res) => {
            // 请求执行成功后，关闭loading提示框
            wx.hideLoading()
            console.log(res)
        }
      })
  }
})