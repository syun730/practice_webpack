const path = require('path');

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
// CommonJs