// pages/memo/memo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    todos: [],
    inputVal: null
  },

  onLoad() {
    let todos = wx.getStorageSync('todos');
    if (!Array.isArray(todos)) {
      todos = []; // 如果不是数组，则初始化为空数组
    }
    this.setData({
      todos: todos
    });
  },

  // 处理输入事件
  setValue(res) {
    this.setData({inputVal: res.detail.value})
  },

  // 新增代办内容
  handleAddTap() {
    this.setData({hidden: !this.data.hidden})
  },

  // 关闭当前输入框
  cancel() {
    this.setData({inputVal: null})
    this.setData({hidden: !this.data.hidden})
  },

  // 提交保存输入的待办事项
  confirm() {
    console.log("保存:", this.data.inputVal)
    if(this.data.inputVal == null) {
      wx.showToast({
        title: '请先填写待办事项',
        icon: 'error',
        mask: true
      })
      return
    }
    const { todos, inputVal } = this.data;
    if (inputVal.trim() !== '') {
      todos.push(inputVal.trim());
      this.setData({
        todos: todos,
        inputValue: null
      });
      // 将更新后的待办事项保存到本地缓存
      wx.setStorageSync('todos', todos);
    }

    this.setData({inputVal: null})
    this.setData({hidden: !this.data.hidden})
  },


  removeTodo(e) {
    const { todos } = this.data;
    const index = e.currentTarget.dataset.index;
    todos.splice(index, 1);
    this.setData({
      todos: todos
    });
    // 将更新后的待办事项保存到本地缓存
    wx.setStorageSync('todos', todos);
  }
})