// pages/position/position.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  getSettingInfo() {
    wx.getSetting({
      success: res => {
        console.log("授权信息：", res)
      }
    })
  },

  chooseLocationHandler() {
    wx.chooseLocation({
      success: res => {
        console.log("位置选择成功：", res)
      },
      fail: err => {
        console.log("位置选择失败：", err)
      },
      complete: comp => {
        console.log("位置选择完成：", comp)
      }
    })
  },

  openLocationHandler() {
    wx.openLocation({
      latitude: 38.90,
      longitude: 117.67,
      name: '天津塘沽机场',
      address: '天津塘沽机场的详细经纬度'
    })
  },

  getCenterLocationHandler() {
    this.mapCtx.getCenterLocation({
      success: res => {
        console.log("获取中心坐标成功：", res)
      }
    })
  },

  moveToLocationHandler() {
    this.mapCtx.moveToLocation({
      latitude: 39.908874,
      longitude: 116.397747,
      success: res => {
        console.log("坐标移动成功：", res)
      }
    })
  },

  translateMarkerHandler() {
    this.mapCtx.translateMarker({
      markerId: 1,
      destination: {
        latitude: '39.918044',
        longitude: '116.397289'
      },
      animationEnd: res => {
        console.log("平移标志成功：", res)
      },
      fail: err => {
        console.log("平移标志失败：", err)
      }
    })
  },

  includePointsHandler() {
    this.mapCtx.includePoints({
      points: [
        {
          latitude: '39.926705',
          longitude: '116.378072'
        },{
          latitude: '39.908654',
          longitude: '116.381678'
        },{
          latitude: '39.909382',
          longitude: '116.414513'
        },{
          latitude: '39.928124',
          longitude: '116.416411'
        }
      ],
      success: res => {
        console.log("缩放视野展示所有经纬度成功：", res)
      },
      fail: err => {
        console.log("缩放视野展示所有经纬度失败：", err)
      }
    })
  },

  getRegionHandler() {
    this.mapCtx.getRegion({
      success: res => {
        console.log("获取视野范围成功", res)
      },
      fail: err => {
        console.log("获取视野范围失败", err)
      },
      complete: comp => {
        console.log("获取视野范围完成", comp)
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.mapCtx = wx.createMapContext('myMap')
    this.mapCtx.addMarkers({
      markers: [{
        id: 1,
        latitude: 39.908874,
        longitude: 116.397747,
        width: 30,
        height: 50,
        title: '北京天安门',
        callout: {
          content: '这是北京的天安门'
        }
      }
      ],
      success: res => {
        console.log("mapCtx addMarkers成功：", res)
      },
      fail: err => {
        console.log("mapCtx addMarkers失败：", err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})