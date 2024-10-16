// pages/aboutme/aboutme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiSelectorItems: [['罗宋汤', '蘑菇汤'], ['牛排', '猪排', '鱼排'], ['冰淇淋', '鸡蛋布丁']],
    year: [1991, 1992, 1993, 1994, 1999],
    month: [1, 2, 3, 4, 5, 6],
    day: [14, 15, 16, 17, 18]
  },

  multiSelectorChange(e) {
    console.log(e)
    let arrayIndex = e.detail.value;
    let array = this.data.multiSelectorItems;
    let result = new Array()
    for(let i=0 ; i<arrayIndex.length ; i++) {
      let k = arrayIndex[i];
      let v = array[i][k]
      result.push(v)
    }
    this.setData({result: result})
  },

  pickerViewChange(e) {
    console.log(e)
    let arrayIndex = e.detail.value
    var year = this.data.year[arrayIndex[0]]
    var month = this.data.month[arrayIndex[1]]
    var day = this.data.day[arrayIndex[2]]
    this.setData({result2: year + "年" + month + "月" + day + "日"})
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