// pages/examples/examples.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [  
        { id: 1, name: '数值比较', description: '比较输入的两个数值的大小'},  
        { id: 2, name: '计算器', description: '一个微型计算器', path: '/pages/calc/calc' },  
        { id: 3, name: '事件传参', description: '两种事件传参示例演示', path: '/pages/event/event' },  
        { id: 4, name: '分类页', description: '两级分类页面的切换演示', path: '/pages/category/category' },  
        { id: 5, name: '网络API', description: '网络请求示例', path: '/pages/requestapi/requestapi' },
        { id: 6, name: '文件上传和下载', description: '文件上传和下载', path: '/pages/file/file' },
        { id: 7, name: '微调查', description: '用户调查问卷', path: '/pages/investigate/investigate' },
        { id: 8, name: '组件', description: '小程序组件', path: '/pages/compon/compon' },
        { id: 9, name: '多媒体API', description: '多媒体API', path: '/pages/media/media' }
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
    
  }
  
})