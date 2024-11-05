// pages/file/file.js
const ft = wx.getFileSystemManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: 'http://117.78.2.154:9100/test/20241104/ed6cd0fdea104f24a4be07d980a2739fCg8iKNHRHANv1b04aaaa1a08004e772f579e4fb95cb5.jpg',
    tempFilePath: null
  },

  uploadHandler() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        var tempFilePath = res.tempFilePaths[0];
        const uploadTask = wx.uploadFile({      
          filePath: tempFilePath,
          name: 'file',
          url: 'http://117.78.2.154:8091/file/upload',
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
    // if(!this.data.imageSrc) {
    //   wx.showToast({
    //     title: '文件不存在',
    //     icon: 'error'
    //   })
    //   return
    // }
    wx.downloadFile({
      // url: this.data.imageSrc,
      url: "http://117.78.2.154:9100/test/20241104/兰亭集序.docx",
      success:(res) => {
        console.log(res)
        this.setData({tempFilePath: res.tempFilePath})
        console.log("tempFilePath:", this.data.tempFilePath)
      },
      fail: err => {
        console.log("文件下载失败：", err)
      }
    })
  },

  getFileInfoHandler() {
    wx.getFileInfo({
      filePath: this.data.tempFilePath,
      success: res => {
        console.log("获取文件信息：", res)
      }
    })
    // const ft = wx.getFileSystemManager()
    // ft.getFileInfo({
    //   filePath: this.data.tempFilePath,
    //   success: res => {
    //         console.log("获取文件信息：", res)
    //       }
    // })

  },
  getSaveFileListHandler() {
    ft.getSavedFileList({
      success: res => {
        console.log("获取保存的文件列表：", res)
      }
    })
  },
  saveFileHandler() {
    if(!this.data.tempFilePath) {
      wx.showToast({
        title: '文件不存在',
        icon: 'error'
      })
    }
    ft.saveFile({
      tempFilePath: this.data.tempFilePath,
      success: res => {
        console.log("文件保存：", res)
      }
    })

  },
  getSaveFileInfoHandler() {
    ft.getSavedFileInfo({
      filePath: "http://store/Kd2lIFmxa7g81b04aaaa1a08004e772f579e4fb95cb5.jpg",
      success: res => {
        console.log("获取保存的文件信息：", res)
      }
    })
  },

  removeSavedFileHandler() {
    ft.removeSavedFile({
      filePath: "http://store/Kd2lIFmxa7g81b04aaaa1a08004e772f579e4fb95cb5.jpg",
      success: res => {
        console.log("删除本地保存的文件：", res)
      },
      fail: err => {
        console.log("删除本地保存的文件失败：", err)
      }
    })
  },

  openDocumentHandler() {
    console.log("打开文件", this.data.tempFilePath)
    wx.openDocument({
      // filePath: "http://store/1hMSmYYHIXIF9a78d9f1b9a677acfb148f0800cebc23.docx",
      filePath: this.data.tempFilePath,
      success: res => {
        console.log("文件打开成功：", res)
      },
      fail: res => {
        console.log("文件打开失败：", res)
      }
    })
  }
})