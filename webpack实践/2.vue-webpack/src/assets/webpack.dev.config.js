const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry:{
    app: [
        path.join(__dirname, 'src/index.js')
    ],
    common: ['vue', 'vue-router']
  }, 
  output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath:'/'
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
              name: "common",
              chunks: "initial",
              minChunks: 2
            }
        }
    }
  },
  devServer: {
      contentBase: path.join(__dirname, './dist'),
      port:"8888",
      open:true,
      hot: true
  },
  module: {
    rules: [
        {
            test: /\.js$/,                  
            loader: 'babel-loader',
            exclude:/node-modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [process.env.NODE_ENV !== 'production'? 'vue-style-loader': MiniCssExtractPlugin.loader,'css-loader'] 
        },
        {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader"
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
              loader: 'url-loader',
              options: {
                esModule: false, // 这里设置为false
                limit: 100
              }
          }]
        },
        {
          test: /\.(eot|woff2?|ttf|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name]-[hash:5].min.[ext]',
                  limit: 5000, 
                  publicPath: 'fonts/',
                  outputPath: 'fonts/'
                }
              }
            ]
        }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
        vue: 'vue/dist/vue.js',
        pages: path.join(__dirname, 'src/pages'),       
        component: path.join(__dirname, 'src/component'),
        router: path.join(__dirname, 'src/router'),
        assets:path.join(__dirname,'src/assets')
    }
  }
};