const { loaderExtractCSS } = require('./webpack-plugins/extractPlugin');

const commonloaders = ({ devMode }) => [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: ['babel-loader', 'eslint-loader']
  },
  loaderExtractCSS({ devMode: devMode })
];

const ssrLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: ['babel-loader', 'eslint-loader']
  },
  loaderExtractCSS({ devMode: false })
];

module.exports = {
  commonloaders: commonloaders,
  ssrLoaders: ssrLoaders
};
