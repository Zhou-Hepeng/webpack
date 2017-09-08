const path = require('path'); // 导入路径包
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//压缩代码
var optimizePlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  //保留banner
  // comments: /{ "framework": "Vue" }/,
  // sourceMap: true
})

module.exports = {
    entry: "./index.js", // 入口文件

    // 输出文件 build下的bundle.js
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "bundle.js"
    },
    devServer:{
        contentBase:"./build",//本地服务器所加载的页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true//实时刷新
    },
    // 使用loader模块
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    //插件
    plugins:[
    	new HtmlWebpackPlugin({
    		template:'./index.html'
    	}),
        optimizePlugin,
        new ExtractTextPlugin("style.css")
    ]
};