module.exports = {
  entry: {
    skift: './src/index.ts'
  },
  output: {
    filename: 'dist/[name].js',
    sourceMapFilename: 'dist/[name].source.map',
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
            loader: 'ts-loader'
          }
        ],
        exclude: [/\.e2e\.ts$/]
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
