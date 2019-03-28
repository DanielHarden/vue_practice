 var path = require('path');
 var VueLoaderPlugin = require('vue-loader/lib/plugin');
 // 新的版本vue-loader要配合这个插件才能使用

 var webpack = require('webpack')

 module.exports = {
 	entry: path.join(__dirname, './src/main.js'),
 	output: {
 		path: path.join(__dirname, './dist'),
 		filename: 'bundle.js'
 	},
 	mode: 'development',
 	module: {//配置所有第三方模块匹配规则
 		rules: [
 		    {test: /\.css$/, use: ['style-loader', 'css-loader']},
 		    {test: /\.vue$/, use: ['vue-loader']}
 		]
 	},
 	plugins: [
 	    new VueLoaderPlugin(),
 	    new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            //引入popper.js， 支持bootstrap的dropdown插件
            Popper: ['popper.js', 'default']
        })
 	],

 	devServer: {
 		proxy: {
 			'/loginReq': {
 				target: 'http://localhost:1088',
 				changeOrigin: true
 			},

 			'/registerReq': {
 				target: 'http://localhost:1088',
 				changeOrigin: true
 			}
 		}
 	}
 }