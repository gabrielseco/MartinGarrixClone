const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const { ssrLoaders } = require('./webpack/loaders');
const { ssrPlugins } = require('./webpack/plugins');
const resolve = require('./webpack/resolve');

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, './../dist/static'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  resolve: resolve,
  plugins: ssrPlugins(webpack),
  module: {
    rules: ssrLoaders
  }
};
