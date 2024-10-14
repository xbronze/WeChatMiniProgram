// pages/components/components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    items: Array(10).fill(null), // 填充10个空项作为滚动内容  
    iconColor: ['red','blue','yellow'],
    nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: #1AAD19;'
        },
        children: [{
          type: 'text',
          text: 'You never know what you\'re gonna get.'
        }]
      }]
  },
    

})