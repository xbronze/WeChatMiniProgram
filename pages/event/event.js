// pages/event/event.js
Page({

    // currentTarget 事件绑定者：view
    // target  事件触发者：view
    oneParentHandler(event) {
        console.log(event)
    },

    // currentTarget 事件绑定者：view
    // target  事件触发者：button
    oneHandler(event) {
        console.log(event)
    },

    twoParentHandler(event) {
        // 通过事件对象获取的是view身上绑定的数据
        console.log(event)
    },

    twoHandler(event) {
        // 通过事件获取到的是 触发事件的节点，也就是按钮，以及父节点view身上的所有mark数据
        console.log(event)
    }
})