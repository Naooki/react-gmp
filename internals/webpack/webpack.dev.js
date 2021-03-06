/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = require('./webpack.base')({
  mode: 'development',

  entry: [path.join(process.cwd(), 'app/app.tsx')],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // Add development plugins
  plugins: [
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: 'app/index.html',
    }),
  ],

  tsLoaders: [
    { loader: 'babel-loader' },
    {
      loader: 'ts-loader',
      options: {
        logLevel: 'info',
      },
    },
  ],

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: './build',
    publicPath: '/',
    historyApiFallback: true,
  },

  performance: {
    hints: false,
  },
});
