const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getTransformer = require('ts-transform-graphql-tag').getTransformer

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
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      loader: 'vue-loader'
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
        getCustomTransformers: () => ({ before: [getTransformer()] })
      }
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'vue-style-loader',
        'css-loader',
        'less-loader'
      ]
    }],
  },
  plugins: [new HtmlWebpackPlugin(), new VueLoaderPlugin()]
}
