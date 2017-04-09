// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
const cfg = require('./package.json');

export default {
	entry: './src/main.ts',
    dest: './dist/'+cfg.name+'.js',
    format: 'umd',
    sourceMap: true,
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