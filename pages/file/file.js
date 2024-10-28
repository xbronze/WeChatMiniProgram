// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: null
  },

  uploadHandler() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        var tempFilePath = res.tempFilePaths[0];
        const uploadTask = wx.uploadFile({      
          filePath: tempFilePath,
          name: 'file',
          url: 'http://localhost:8091/file/upload',
          success:(res) => {
            console.log(res)
            var result = JSON.parse(res.data)
            this.setData({imageSrc: result.fileurl})
          },
          fail(err) {
            console.error('upload fail:', err);  
          } 
        })

        // uploadTask.onProgressUpdate((res) => {
        //   console.log('上传进度', res.progress)
        //   this.setData({progressNum: res.progress})
        //   console.log('已经上传的数据长度', res.totalBytesSent)
        //   console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        // })

        wx.showToast({
          title: '上传成功',
          duration: 1000,
          icon: 'success'
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