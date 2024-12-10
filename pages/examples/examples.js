// pages/examples/examples.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [  
        { id: 1, name: '数值比较', description: '比较输入的两个数值的大小'},  
        { id: 2, name: '计算器', description: '一个微型计算器', path: '/modules/exampleModule/calc/calc' },  
        { id: 3, name: '事件传参', description: '两种事件传参示例演示', path: '/modules/exampleModule/event/event' },  
        { id: 4, name: '分类页', description: '两级分类页面的切换演示', path: '/modules/exampleModule/category/category' },  
        { id: 5, name: '网络API', description: '网络请求示例', path: '/modules/exampleModule/requestapi/requestapi' },
        { id: 6, name: '文件上传和下载', description: '文件上传和下载', path: '/modules/exampleModule/file/file' },
        { id: 7, name: '微调查', description: '用户调查问卷', path: '/modules/exampleModule/investigate/investigate' },
        { id: 8, name: '组件', description: '小程序组件', path: '/modules/exampleModule/compon/compon' },
        { id: 9, name: '多媒体API', description: '多媒体API', path: '/modules/exampleModule/media/media' },
        { id: 10, name: '备忘录', description: '使用数据缓存API实现的备忘录功能', path: '/modules/exampleModule/memo/memo' },
        { id: 11, name: '位置坐标', description: '位置API实践', path: '/modules/exampleModule/position/position' },
        // 可以继续添加更多功能  
        { id: 12, name: '自定义组件', description: '自定义组件', path: '/modules/exampleModule/cust-component/cust-component' }
      ]
  },

  onOptionTap: function(e) {
    const option = this.data.options.find(option => option.id === e.currentTarget.dataset.id);
    if(option && option.path) {
        console.log('点击了选项：', option.id, ' path地址是：' + option.path);  
        // 跳转页面
        wx.navigateTo({
          url: option.path
        })
    }
    
  }
  
})