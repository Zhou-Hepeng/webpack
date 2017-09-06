const path = require('path'); // 导入路径包
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./index.js", // 入口文件

    // 输出文件 build下的bundle.js
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "bundle.js"
    },

    // 使用loader模块
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    //插件
    plugins:[
    	new HtmlWebpackPlugin({
    		template:'./index.html'
    	}),
    ]
};