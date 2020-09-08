// module.exports = {
//   publicPath     :  process.env.NODE_ENV === 'production'
//   ? '/myblog/'
//   : '/',//使用相对路径，防止打包上线可能导致资源加载失败
//   outputDir      : 'dist',
//   assetsDir      : 'assets',
//   devServer      : {
// 	  open: process.platform === 'darwin',
// 	  host: '0.0.0.0',
// 	  port: 8080,//自己设置的端口号
// 	  https: false,
// 	  hotOnly: false,
// 	  proxy: null, // string | Object
// 	  before: app => {}
//   },
//   // 以下是pwa配置
//   pwa         : {
//     iconPaths: {
//       favicon32     : 'favicon.ico',
//       favicon16     : 'favicon.ico',
//       appleTouchIcon: 'favicon.ico',
//       maskIcon      : 'favicon.ico',
//       msTileImage   : 'favicon.ico'
//     }
//   }
// }