const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    skift: './src/index.ts'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].source.map',
    library: 'skift',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader'
      }],
      exclude: [/\.e2e\.ts$/]
     }, {
      test: /\.css$/,
      use: [{
        loader: 'css-to-string-loader'
      }, {
        loader: 'css-loader'
      }]
    }, {
      test: /\.svg$/,
      loader: 'file-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'examples/index.html',
    })
  ],
};
