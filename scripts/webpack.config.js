const fs = require('fs-extra');
const tip = require('./webpack.tip')();
const resolve = require('path').resolve;
const isHaveDll = fs.existsSync(resolve(tip.paths.dll, 'dll.js'));

const dllPlugin = isHaveDll ? [tip.plugins.DllReferencePlugin] : [];

const prodPlugin = !tip.isDev
  ? [
      tip.plugins.FastUglifyJsPluginProd,
      tip.plugins.HotModuleReplacementPlugin,
      tip.plugins.CleanWebpackPlugin,
      tip.plugins.CopyWebpackPlugin,
      tip.plugins.HashedModuleIdsPlugin,
    ]
  : [];

module.exports = {
  target: 'web',
  mode: tip.isDev ? tip.mode.development : tip.mode.production,
  devtool: tip.isDev ? tip.devtool.inlineSourceMap : tip.devtool.none,
  entry: {
    index: tip.paths.entry,
  },
  output: {
    path: tip.paths.output,
    pathinfo: true,
    filename: tip.isDev ? '[name].js' : '[name]_[hash:8].js',
    chunkFilename: tip.isDev ? '[name].chunk.js' : '[name]_[hash:8].chunk.js',
  },
  externals: {},
  resolve: {
    extensions: tip.resolve.extensions,
    alias: tip.resolve.alias,
    plugins: [],
  },
  // webpack4默认的chunks参数
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      tip.module.rules.eslint,
      tip.module.rules.cssLoader,
      tip.module.rules.lessLoader,
      tip.module.rules.urlLoader,
      tip.module.rules.fileLoader,
      tip.module.rules.sourceMapLoader,
      tip.module.rules.tsLodaer,
      tip.module.rules.babelLoaderBuild,
    ],
  },
  devServer: tip.devServer,
  plugins: [
    tip.plugins.HtmlWebpackPlugin,
    tip.plugins.DefinePlugin,
    ...prodPlugin,
    ...dllPlugin,
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};
