// pages/compon/compon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorItems: ["苹果","香蕉","荔枝"],
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
  }
})