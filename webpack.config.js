const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry:  ['webpack-hot-middleware/client', './src/index.js'], // 2つのファイルをwebpackの基点とする
  output: {
    filename: 'main.js', // 出力されるファイル名
    publicPath: '/example_public_path/' // 出力されるファイルを読み込めるパスを指定する
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 拡張子が.jsであり
        exclude: /node_modules/, // ディレクトリがnode_module以外であれば
        use: ['babel-loader'] // Babelの対象とする
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMRを使用するためのプラグイン
  ]
};