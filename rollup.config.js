import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'bin/corsProxy',
    format: 'cjs',
    banner: '#!/usr/bin/env node'
  },
  plugins: [
    // babel({
    //   exclude: 'node_modules/**', // 只编译我们的源代码
    //   runtimeHelpers: true,
    //   plugins: [
    //     [
    //       '@babel/transform-runtime'
    //     ]
    //   ]
    // }),
    resolve(),
    commonjs(),
    json(),
  ],
  external: [
    'configstore',
    'msee',
    'chalk',
    'fs-extra',
    'inquirer',
    'minimist',
    'path',
    'fs',
    'cors',
    'http-proxy-middleware',
    'express',
  ]
};