// pages/cust-component/cust-component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value: 'CHN1', name: '中国1'},
      {value: 'USA1', name: '美国1', checked: 'true'},
      {value: 'BRA1', name: '巴西1'}
    ]
  },

  getInfo(e) {
    console.log("这是组件调用者：", e)
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