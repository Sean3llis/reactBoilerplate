module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		path: __dirname + '/app/js',
		filename: 'app.min.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel?presets[]=react'
	    }
	  ]
	}
}