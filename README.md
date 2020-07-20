# webpack

参考動画  
https://www.youtube.com/playlist?list=PLC_Jqbgu7I6baxP0oHxMXtTh7nBGGwqfM

## 初期設定
`yarn init -y`

## webpackインストール
`yarn add webpack webpack-cli`


## webpack実行
`yarn run webpack` or `npx webpack`

### modeの追加
- development
- production


`yarn run webpack --mode development --devtool none`




## webpackの設定ファイル

参考動画  
https://www.youtube.com/watch?v=RKG0VTlRtPU&list=PLC_Jqbgu7I6baxP0oHxMXtTh7nBGGwqfM&index=3

`
webpack.config.js
`

```
module.exports = {
  mode: 'development',
  devtool: 'none',
  // entry: './src/app.js', //すべてのファイルの基準
  // entry: {app: './src/app.js'}, //変数化すべてのファイルの基準
  // entry: ['./src/app.js', './src/sub.js'] // 複数ある場合は配列にする・依存関係が無い場合
  entry: {
    app: './src/app.js',
    sub: './src/sub.js'
  }, // ファイルを分けたい場合
  output: {
    path: path.resolve(__dirname, 'public'), // パスを変更したい場合
    // filename: 'bundle.js' //ファイル名を変更したい場合
    filename: '[name].bundle.js' //変数化ファイル名を変更したい場合
  }
}
```