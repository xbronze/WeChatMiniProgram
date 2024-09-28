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

