const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('./webpack-plugins/InterpolateHtmlPlugin');

const { TITLE } = require('./../env/dev.env');
const { pluginExtractCss } = require('./webpack-plugins/extractPlugin');

const PUBLIC_URL = {
  DEV: './images',
  PROD: './static/images'
};

const devPlugins = webpack => [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      PUBLIC_URL: JSON.stringify(PUBLIC_URL.DEV)
    }
  }),
  new HtmlWebpackPlugin({
    title: TITLE,
    template: './assets/index.html',
    inject: 'body'
  }),
  new CopyWebpackPlugin([
    {
      from: 'assets/images',
      to: 'images'
    }
  ]),
  new InterpolateHtmlPlugin({
    PUBLIC_URL: PUBLIC_URL.DEV
  }),
  pluginExtractCss({ devMode: true })
];

const prodPlugins = webpack => [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      PUBLIC_URL: JSON.stringify(PUBLIC_URL.PROD)
    }
  }),
  new HtmlWebpackPlugin({
    title: TITLE,
    template: './assets/index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true
    }
  }),
  new CopyWebpackPlugin([
    {
      from: 'assets/images',
      to: 'images'
    }
  ]),
  new InterpolateHtmlPlugin({
    PUBLIC_URL: PUBLIC_URL.PROD
  }),
  pluginExtractCss({ devMode: false })
];

const ssrPlugins = webpack => {
  return [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PUBLIC_URL: JSON.stringify('./static/images')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/images',
        to: 'images'
      }
    ]),
    pluginExtractCss({ devMode: false })
  ];
};

module.exports = {
  devPlugins: devPlugins,
  prodPlugins: prodPlugins,
  ssrPlugins: ssrPlugins
};
