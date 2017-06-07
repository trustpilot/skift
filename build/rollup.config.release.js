import rollupConfig from './rollup.config.debug';
import uglify from 'rollup-plugin-uglify';

rollupConfig.dest = rollupConfig.dest.replace(/\.js$/, '.min.js');

rollupConfig.plugins.push(uglify());

export default rollupConfig;
