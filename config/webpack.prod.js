const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    skift: './src/index.ts'
  },
  externals: {
    jquery: {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      root: 'jQuery'
    }
  },
  output: {
    filename: 'dist/[name].min.js',
    sourceMapFilename: '[name].source.map',

    library: 'skift',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        exclude: [/\.e2e\.ts$/]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      beautify: false, //prod
      output: {
        comments: false
      }, //prod
      mangle: {
        screw_ie8: true
      }, //prod
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false // we need this for lazy v8
      }
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
