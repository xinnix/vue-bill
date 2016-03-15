// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//     // 入口
//     entry: './src/main',
//     // 输出
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: '[name].js',
//         publicPath: '/dist/'
//     },
//     module: {
//         // 加载器
//         loaders: [
//             { test: /\.vue$/, loader: 'vue',include: /src/ },
//             { test: /\.js$/, loader: 'babel', include: /src/},
//             { test: /\.css$/, loader: 'style!css!autoprefixer'},
//             { test: /\.less/, loader: 'style!css!autoprefixer!less'},
//             { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
//             { test: /\.(html|tpl)$/, loader: 'html-loader' },
//         ]
//     },
//     vue: {
//         loaders: {
//             css: 'style!css!autoprefixer!less'
//         }
//     },
//     babel: {
//         presets: ['es2015'],
//         plugins: ['transform-runtime']
//     },
//     resolve: {
//         // require时省略的扩展名，如：require('module') 不需要module.js
//         extensions: ['', '.js', '.vue'],
//         // 别名
//         alias: {
//             filter: path.join(__dirname, './src/filters'),
//             components: path.join(__dirname, './src/components')
//         }
//     },
//     plugins: [
//         // short-circuits all Vue.js warning code
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // // minify with dead-code elimination
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // // optimize module ids by occurence count
    // new webpack.optimize.OccurenceOrderPlugin()
//     ],
//     // 开启source-map，webpack有多种source-map，在官网文档可以查到
//     // devtool: '#source-map'
//     devtool: false
//
//
//
// };
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  // resolveLoader: {
  //   root: path.join(__dirname, 'node_modules'),
  // },
  resolve: {
          // require时省略的扩展名，如：require('module') 不需要module.js
          extensions: ['', '.js', '.vue'],
          // 别名
          alias: {
              filter: path.join(__dirname, './src/filters'),
              components: path.join(__dirname, './src/components')
          }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  vue: {
      loaders: {
          css: 'style!css!autoprefixer!less'
      }
  },
  babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false;
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
