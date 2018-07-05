const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  mode: 'production',
  entry: {
    skift: './src/index.ts'
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
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }]
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      cache: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
