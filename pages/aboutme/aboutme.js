// pages/aboutme/aboutme.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false
  },

  getUserInfo(e) {
    console.log(e.detail.userInfo)
    if(e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }

  },
  
  credit() {
    wx.request({
      url: 'http://117.78.2.154:3000/credit',
      method: 'get',
      data: {
        token: app.globalData.token
      },
      success: res=> {
        console.log(res.data)
      }
    })
  },

  sendUserInfo() {
    var token = app.globalData.token
    wx.getUserInfo({
      success: res => {
        wx.request({
          url: 'http://117.78.2.154:3000/userinfo?token=' + token,
          method: 'post',
          data: {
            rawData: res.rawData,
            signature: res.signature,
            encryptedData: res.encryptedData,
            iv: res.iv
          }
        })
      }
    })
  },

  onLoad() {
    if(app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  }
})