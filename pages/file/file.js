// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: ''
  },

  uploadHandler() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        var tempFilePath = res.tempFilePaths[0];
        wx.uploadFile({
          filePath: tempFilePath,
          name: 'file',
          url: 'http://localhost:8080/miniProgram/files/upload',
          success:(res) => {
            console.log(res)
            this.setData({imageSrc: res.data})
          }
        })
      }
    })
  },

  downloadHandler() {
    wx.downloadFile({
      url: this.data.imageSrc,
      success:(res) => {
        console.log(res)
      }
    })
  }
})