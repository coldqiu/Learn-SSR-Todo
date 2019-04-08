// webpack.config.base.js

const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  target: 'web',
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|svg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'resources/[path][name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
}


module.exports = config


// npm WARN babel-plugin-transform-vue-jsx@3.7.0 requires a peer of babel-helper-vue-jsx-merge-props@^2.0.0 but none is installed. You must install peer dependencies yourself.
//   npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.