import webpack from 'webpack';
import path from 'path';

module.exports = {
  entry: {
    main: './client/app.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.js', '.jsx', '.css']
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: 'mithril'
    })
  ],
  eslint: {
    configFile: '.eslintrc'
  }
};
