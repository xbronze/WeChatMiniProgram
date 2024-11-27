// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: "0",
        name: "分类1",
        child: [
          {
            title: "分类1-1",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类1-2",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类1-3",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类1-4",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类1-5",
            desc: "实践是检验真理的唯一标准"
          }
        ]
      },
      {
        id: "1",
        name: "分类2",
        child: [
          {
            title: "分类2-1",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类2-2",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类2-3",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类2-4",
            desc: "实践是检验真理的唯一标准"
          },
          {
            title: "分类2-5",
            desc: "实践是检验真理的唯一标准"
          }
        ]
      }
    ],
    classify_sidebar: ["分类1", "分类2", "分类3", "分类4", "分类5"], //左侧边栏内容的数组
    classify_content: [],  //右边内容元素的数组
    active: 0
  },

  handleMenuItemChange(e) {
    console.log(e)
    const { index } = e.currentTarget.dataset
    this.setData({active: index})
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