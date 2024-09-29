## 关于项目中Sass扩展语言的使用

如果项目使用`.scss`的样式文件后，样式没有生效，或者项目中的功能卡着无法点击和运行，要检查设置文件`project.config.json`

```xml
{
  ...
  "setting": {
    "useCompilerPlugins": [
      "sass"
    ]
  ...
}
```

确保setting字段中设置了`"useCompilerPlugins": ["sass"]`



.btns>view:last-child>view:first-child {

  flex-basis: 50%;

}



.btns>view>:first-child>view:first-child {

  color: #f00;

}



.btns>view>view:last-child {

  color: #fc8e00;

}





.result {

  flex: 2;

  background: #f3f6fe;

  position: relative;

}



.result-num {

  position: absolute;

  font-size: 27pt;

  bottom: 5vh;

  right: 3vw;

}



.result-op {

  position: absolute;

  font-size: 15pt;

  bottom: 1vh;

  right: 3vw;

}