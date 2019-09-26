const path = require('path');
const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    skift: './lib/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    sourceMapFilename: '[name].source.map',
    library: 'skift',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'css-to-string-loader'
      }, {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }]
    }, {
      test: /\.svg$/,
      loader: 'file-loader',
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
