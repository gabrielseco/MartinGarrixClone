const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const loaders = require('./webpack/loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PUBLIC_URL: JSON.stringify('./static/images')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/images',
        to: 'static/images'
      }
    ])
  ],
  module: {
    rules: loaders
  }
};
