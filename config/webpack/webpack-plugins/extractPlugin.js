const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginExtractCss = ({ devMode }) =>
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
  });

const loaderExtractCSS = ({ devMode }) => ({
  test: /\.(sa|sc|c)ss$/,
  use: [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader',
    'sass-loader'
  ]
});

module.exports = {
  pluginExtractCss: pluginExtractCss,
  loaderExtractCSS: loaderExtractCSS
};
