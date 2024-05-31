
# js兼容处理与压缩
- 用[babel](https://www.babeljs.cn/docs/usage)
- [babel-loader](https://github.com/babel/babel-loader)
- 1. 基本js兼容性处理 --> @babel/preset-env(问题：只能转换基本语法，如promise高级语法不能转换)
- 2. 全部js兼容性处理 --> @babel/polyfill(问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~)
- 3. 需要做兼容性处理的就做：按需加载  --> core-js

## 依赖

```jsx
yarn add babel-loader @babel/core @babel/preset-env -D
```

- 全部引用@babel/polyfill

- 入口文件直接全部引用@babel/polyfill

```jsx
yarn add @babel/polyfill -D
```

- 按需引用core-js

```jsx
yarn add core-js -D
```

## 配置

```jsx
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            },
                            useBuiltIns: "usage",
                            corejs: "3.10.0",
                        }, ]
                    ]
                }
            }
        }]
    },
    resolve: {},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'js兼容处理',
            template: './index.html'
        })
    ]
};
```

## 压缩

生产环境下会自动压缩js代码

```jsx
mode: 'production'
```