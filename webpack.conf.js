const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const dist = path.join(__dirname, 'dist')

module.exports = {
  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: dist,
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json', '.ts', '.less', '.css']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: { appendTsSuffixTo: [/\.vue$/] }
    }, {
      test: /\.less$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'less-loader'
      ]
    }],
  },
  plugins: [new HtmlWebpackPlugin(), new VueLoaderPlugin()]
}
