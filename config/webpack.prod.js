const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
  entry: {
    skift: './src/skift.ts'
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
    modules: ['node_modules']
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
        loader: 'css-to-string-loader',
      }, {
        loader: 'css-loader',
        options: {
          minimize: true,
        }
      }]
    }]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      cache: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  node: {
    global: true,
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
