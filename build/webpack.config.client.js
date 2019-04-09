// webpack.config.client
const path = require('path')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractPlugin = require("extract-text-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')


const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new VueLoaderPlugin(),
  // new HtmlWebpackPlugin()
]

const devServer = {
  port: 8090,
  host: '127.0.0.1', // 方便其他设备访问
  overlay: {
    errors: true,  //打印报错
  },
  open: true,
  hot: true,
  hotOnly: true
}

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true // postcss-loader 自带了sourceMap 功能，
                // 由于上一步的stylus-loader 已经做了sourceMap ,true
                // 表示使用上一步的sourceMap，提高打包效率
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defaultPlugins.concat[
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ]
  })

} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/index.js'),
      // vendor: ['vue']
    },
    output: {filename: '[name].[chunkhash:8].js'},
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              }
            },
            'style-loader'
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
    },
    plugins: [
      new MiniCssExtractPlugin('styles.[contentHash:8].css'),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor'// 要放在runtime 前面
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'runtime' // ?? 什么作用
      // }),
    ]
  })
}


module.exports = config


