# html压缩

## 配置
设置一下HtmlWebpackPlugin就好了

```jsx
new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
})
```