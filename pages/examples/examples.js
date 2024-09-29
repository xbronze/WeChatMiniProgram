// pages/examples/examples.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [  
        { id: 1, name: '数值比较', description: '比较输入的两个数值的大小'},  
        { id: 2, name: '计算器', description: '一个微型计算器', path: '/pages/calc/calc' },  
        { id: 3, name: '功能3', description: '这是一个示例功能3'},  
        // 可以继续添加更多功能  
      ]
  },

  onOptionTap: function(e) {
    const option = this.data.options.find(option => option.id === e.currentTarget.dataset.id);
    if(option && option.path) {
        // console.log('点击了选项：', option.id, ' path地址是：' + option.path);  
        // 跳转页面
        wx.navigateTo({
          url: option.path
        })
    }
    
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