const path = require('path');

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
  externals: {
    jquery: {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      root: 'jQuery'
    }
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
    }]
  },
};
