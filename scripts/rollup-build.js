import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    babel(),
    uglify(),
  ],
  output: [
    {
      format: 'es',
      file: 'dist/vue-prevent-unload.esm.js',
    },
    {
      format: 'umd',
      name: 'VuePreventUnload',
      exports: 'named',
      file: 'dist/vue-prevent-unload.min.js',
    },
  ]
}
