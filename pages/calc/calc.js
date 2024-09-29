// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: "",  // 第一个数值
    num2: "",  // 第二个数值
    op: "",  // 操作符
    result: ""  // 结果显示
  },

    isNew: false,  // 表示本次是否是要输入新的数值
    isOver: false,

    numBtn: function(e) {
        if(this.isOver) {
            this.setData({result: ""})
            this.isOver = false
        }
        var num = e.target.dataset.val;
        if(this.data.num === "" || this.data.num === "0" || this.isNew) {
            this.setData({num: num})
            this.isNew = false
        } else {
            this.setData({num: this.data.num + num})
        }
        if(this.data.result === "0") {
            this.setData({result: num})
        } else {
            this.setData({result: this.data.result + num})
        }
    },

    opBtn: function(e) {
        if(this.data.num2 === "" && this.isNew) {
            return
        }
        
        // 每次按下加、减、乘、除、等于、求余的按钮后，下次的就要开始记录新的数值
        this.isNew = true;
        var dataset_op_val = e.target.dataset.val
        if(this.data.num2 === "" && dataset_op_val != "=") {
            this.setData({op: dataset_op_val})
            this.setData({num2: this.data.num})
            this.setData({result: this.data.num + this.data.op})
            this.setData({num: "0"})
            return
        }
        var num = Number(this.data.num === "" ? "0" : this.data.num)
        var num2 = Number(this.data.num2 === "" ? "0" : this.data.num2)

        var op = this.data.op;
        if(op === "+") {
            this.setData({num2: num2 + num})
        } else if(op === "-") {
            this.setData({num2: num2 - num})
        } else if(op === "*") {
            this.setData({num2: num2 * num})
        } else if(op === "/") {
            this.setData({num2: num2 / num})
        }else if(op === "%") {
            this.setData({num2: num2 % num})
        }
        
        
        if(e.target.dataset.val === "=") {
            if(this.data.op === "") {
                this.setData({result: this.data.num})
            } else {
                this.setData({result: this.data.num2})
            }
            
            this.setData({num: "", num2: "", amount: "", op: ""})
            this.isNew = true;
            this.isOver = true;
        } else {
            this.setData({op: e.target.dataset.val})
            this.setData({result: this.data.num2 + e.target.dataset.val})
        }
    },

    resetBtn: function(e) {
        this.setData({num: "", num2: "", amount: "", result: "", op: ""})
        this.isNew = false;
    },



  dotBtn: function(e) {
      if(!this.isNew) {
          this.setData({num: "0."})
          this.setData({result: "0."})
          this.isNew = false
          return
      }
      if(this.data.num.indexOf(".") >= 0) {
          return
      }
      this.setData({num: this.data.num + "."})
      this.setData({result: this.data.num})
  },

  delBtn: function(e) {
      var num = this.data.num.substr(0, this.data.num.length - 1)
      this.setData({num: num === "" ? "0" : num})
      this.setData({result: this.data.num})
  }


})