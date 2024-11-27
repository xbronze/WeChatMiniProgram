// pages/media/media.js

const recorder = wx.getRecorderManager();
const backgroundAudioManager  = wx.getBackgroundAudioManager;
const innerAudioContext = wx.createInnerAudioContext()


const ctx = wx.createCameraContext();

Page({

  

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad() {

  },

  // 图片管理
  chooseImg(){
    wx.chooseImage({
      count: 1,
      sourceType: ['album','camera'],
      success: res => {
        console.log("图片已选择：", res)
        this.setData({img_url: res.tempFilePaths[0]})
      }
    })
  },
  checkImg(event) {
    console.log(event.currentTarget.dataset.url)
    wx.previewImage({
      urls: [event.currentTarget.dataset.url],
      success: res => {
        console.log("图片预览：", res)
      }
    })
  },
  saveImg() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.img_url,
      success: res => {
        console.log("图片保存结果：", res)
      }
    })
  },

  // 录音管理
  startRecord() {
    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'mp3',
      frameSize: 50
    }
    
    recorder.start(options)
    recorder.onStart(() => {
      console.log('recorder start')
    })
  },
  stopRecord() {
    recorder.stop()
    recorder.onStop((res) => {
      console.log('recorder stop:', res)
      this.setData({record_file: res.tempFilePath})
    })
  },
  //播放声音
  recordPlay () {
    innerAudioContext.src = this.data.record_file,
    innerAudioContext.play()
    innerAudioContext.onPlay(() => {
        console.log('录音开始播放')
      })
    innerAudioContext.onError((res) => {
      console.log(res)
    })
  },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  // 视频管理
  selectVideo() {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 10,
      success: res => {
        console.log("视频信息：", res)
        this.setData({video_file: res.tempFilePath})
      }
    })
  },
  bindPlayVideo() {
    console.log('视频播放')
    this.videoContext.play()
  },
  bindPauseVideo() {
    console.log('暂停视频')
    this.videoContext.pause()
  },
  bindSaveVideo() {
    wx.saveVideoToPhotosAlbum({
      filePath: this.data.video_file,
      success: res => {
        console.log("视频保存：", res)
      }
    })
  },

  // 相机管理
  takePhoto() {
    console.log("拍照")
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          camera_src: res.tempImagePath
        })
      }
    })
  },

  takeVideo() {
    console.log("开始录像")
    ctx.startRecord({
      success: (res) => {
        console.log("takeVide:", res)
      },
      timeoutCallback: res => {
        console.log("takeVide timeoutCallback:", res)
      } 
    })
    
  },

  stopTakeVideo() {
    console.log("停止录像")
    ctx.stopRecord({
      success: res => {
        this.setData({camera_video: res.tempVideoPath})
      }
    })
  }
})