// const path = require('path')
// const webpack = require('webpack')
// const {VueLoaderPlugin} = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractPlugin = require("extract-text-webpack-plugin")
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//
// const isDev = process.env.NODE_ENV === 'development'
//
// function resolve(dir) {
//   return path.join(__dirname, '..', dir)
// }
//
// const config = {
//   target: 'web',
//   mode: 'development',
//   entry: path.join(__dirname, 'src/index.js'),
//   output: {
//     filename: 'bundle.[hash:8].js',
//     path: path.join(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader'
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       },
//       {
//         test: /\.(gif|jpg|jpeg|svg|png)$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10240,
//               name: '[name].[ext]'
//             }
//           }
//         ]
//       },
//
//       {
//         test: /\.jsx$/,
//         use: [
//           'babel-loader',
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: isDev ? '"development"' : '"production"'
//       }
//     }),
//     new VueLoaderPlugin(),
//     new HtmlWebpackPlugin()
//   ]
// }
//
// if (isDev) {
//   config.module.rules.push({
//     test: /\.styl/,
//       use: [
//         'style-loader',
//         {
//           loader: 'css-loader',
//           options: {
//             module: true // 开启css module
//              }
//         },
//         {
//           loader: 'postcss-loader',
//           options: {
//             sourceMap: true // postcss-loader 自带了sourceMap 功能，
//             // 由于上一步的stylus-loader 已经做了sourceMap ,true
//             // 表示使用上一步的sourceMap，提高打包效率
//           }
//         },
//         'stylus-loader'
//      ]
//   })
//   config.devtool = '#cheap-module-eval-source-map'
//   config.devServer = {
//     port: 8090,
//     host: '127.0.0.1', // 方便其他设备访问
//     overlay: {
//       errors: true,  //打印报错
//     },
//     open: true,
//     // historyFallback: {
//     //   // 将没有映射的地址统一跳转到某个地址    }
//     // },
//     hot: true,
//     hotOnly: true
//   }
//   config.plugins.push(
//     new webpack.HotModuleReplacementPlugin()
//   )
// } else {
//   config.entry = {
//     app: path.join(__dirname, 'src/index.js'),
//     vendor: ['vue']
//   }
//   config.output.filename = '[name].[chunkhash:8].js'
//   config.module.rules.push(
//     {
//       test: /\.styl/,
//       // ExtractPlugin.extract
//       use: ExtractPlugin.extract({
//           fallback: 'style-loader',
//           use: [
//             'css-loader',
//             {
//               loader: 'postcss-loader',
//               options: {
//                 sourceMap: true,
//               }
//             },
//             'style-loader'
//           ]
//       })
//     }
//   )
//   config.plugins.push(
//     // new ExtractPlugin('styles.[contentHash:8].css'),
//     new MiniCssExtractPlugin('styles.[contentHash:8].css'),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor'// 要放在runtime 前面
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'runtime' // ?? 什么作用
//     }),
//   )
// }
//
//
// module.exports = config
//
//
// // npm WARN babel-plugin-transform-vue-jsx@3.7.0 requires a peer of babel-helper-vue-jsx-merge-props@^2.0.0 but none is installed. You must install peer dependencies yourself.
// //   npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.