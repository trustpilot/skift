import typescript from '@alexlur/rollup-plugin-typescript';

module.exports = function(config) {
  config.set({
    preprocessors: {
      'test/**/*.ts': ['rollup']
    },
    rollupPreprocessor: {
      plugins: [typescript()],
      // will help to prevent conflicts between different tests entries
      format: 'iife',
      sourceMap: 'inline'
    }
  });
};
