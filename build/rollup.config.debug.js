// rollup.config.js
import typescript from '@alexlur/rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const cfg = require('../package.json');

export default {
  entry: './src/index.ts',
  dest: `./dist/${cfg.name}.js`,
  format: 'umd',
  globals: {
    jquery: 'jQuery'
  },
  moduleName: cfg.name,
  plugins: [commonjs(), resolve(), typescript()],
  external: ['jquery']
};
