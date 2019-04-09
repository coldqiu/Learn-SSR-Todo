'use strict'

// module.exports = {
//   //You can set the vue-loader configuration by yourself.
// }
module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCss: !isDev,  // 默认为false不会将.vue中的css单独打包到.css文件，true与异步加载模块相背
    cssModules: {
      localIdName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true, // 将css中‘-’连接的类名转换成驼峰命名，使用：在<style module>添加module
    },
    // hotReload: false, // 根据环境变量自动生成
    // loaders: {
    //   // 'docs': docsLoader, 自定义模块指定loader（与template,script,style同级）<docs></docs>
    // },
    // preLoader: {
    //
    // },
    // postLoader: {}
  }
}
