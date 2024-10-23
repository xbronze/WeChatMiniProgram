// pages/requestapi/requestapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  checkHandler() {

    wx.request({
      url: 'http://localhost:8080/mini/hello/world',
      method: 'GET',
      success:(res) => {
        console.log("success:", res)
        this.setData({result: res.data})
      },
      fail:(res) => {
        console.log("fail:", res)
      },
      complete:(res) => {
        console.log("complete:", res)
      }
    })
  }

  
})