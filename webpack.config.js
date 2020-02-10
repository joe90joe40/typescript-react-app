const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/createSite.client.tsx',
	output: {
	  filename: 'js/bundle.js',
	  path: path.resolve(__dirname, 'public'),
	  publicPath: '/',
	  chunkFilename: '[name].bundlee.js'
	},
	module: {
		rules: [
			{
			  test: /\.tsx?$/,
			  loader: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ]
	}
};