var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		// publicPath: '/static/'  --not sure if I need this or not
	},
	plugins: [
		HTMLWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			include: path.join(__dirname, 'src'),
			exclude: /node_modules/
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/i,
			loader: 'file-loader'
		},
		{
			test: /\.css/,
			loaders: ['style-loader', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'postcss-cssnext']
		}]
	}
}
