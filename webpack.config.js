var webpack = require('webpack');
var path = require('path');

const extensionMatchRegEx = function(...extensions) {
  return new RegExp('\\.' + '(' + extensions.join('|') + ')' + '(\\?.*)?$');
}

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style!css!sass' },
      {
        test: extensionMatchRegEx('png', 'svg', 'jpg', 'jpeg', 'gif', 'ttf', 'eot', 'woff', 'woff2'),
        loader: 'file'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js','.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      '_': 'lodash',
      'Immutable': 'immutable',
      'React': 'react'
    })
  ]
};
