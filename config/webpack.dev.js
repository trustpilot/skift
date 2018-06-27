const path = require('path');

module.exports = {
  entry: {
    skift: './src/skift.ts'
  },
  mode: 'development',
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
        loader: 'css-to-string-loader'
      }, {
        loader: 'css-loader',
      }]
    }]
  },
  plugins: [],
  node: {
    global: true,
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
