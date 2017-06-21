module.exports = {
  devtool: 'inline-source-map',
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
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-to-string-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  node: {
    global: true,
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
