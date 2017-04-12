// rollup.config.js
import typescript from '@alexlur/rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
const cfg = require('../package.json');

export default {
	entry: './src/main.ts',
    dest: './dist/'+cfg.name+'.js',
    format: 'umd',
    globals: {
        jquery: 'jQuery',
    },
    moduleName: cfg.name,
	plugins: [
        resolve(),
        typescript()
	],
    external: [ 'jquery' ]
}