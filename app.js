// app.js
App({
  onLaunch() {
    /**
    this.checkLogin(res => {
      console.log('is_login:', res.is_login)
      if(!res.is_login) {
        // 登录
        this.login()
      }
    })

    wx.getSetting({
      success: res => {
        console.log("检查用户是否已授权：", res.authSetting['scope.userInfo'])
        if(res.authSetting['scope.userInfo']) {
          // 执行到此处表示用户已授权，可以直接获取到用户信息
          wx.getUserInfo({
            success: res => {
              console.log(res)
              this.globalData.userInfo = res.userInfo

              if(this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
     */
  },

  checkLogin(callback) {
    var token = this.globalData.token
    if(!token) {
      // 从数据缓存中获取token
      token = wx.getStorageSync('token')
      if(token) {
        this.globalData.token = token
      } else {
        callback({
          is_login: false
        })
        return
      }

      wx.request({
        url: 'http://117.78.2.154:3000/checklogin',
        method: 'get',
        data: {
          token: token
        },
        success: res => {
          callback({
            is_login: true
          })
        }
      })
    }
  },

  login() {
    wx.login({
      success: (res) => {
        console.log('login code:' + res.code)
        wx.request({
          url: 'http://117.78.2.154:3000/login',
          method: 'post',
          data: {
            code: res.code
          },
          success: res => {
            console.log('token:' + res.data.token)
            // 将token保存为公共数据（用于在多个页面中访问）
            this.globalData.token = res.data.token
            // 将token保存在数据缓存（下次打开小程序无需重新获取token）
            wx.setStorage({
              key: 'token',
              data: res.data.token
            })
          }
        })
      },
    })
  },

  globalData: {
    token: null,
    userInfo: null
  }
})
