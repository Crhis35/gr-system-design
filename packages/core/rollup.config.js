import { defineConfig } from 'rollup';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';

import postcss from 'rollup-plugin-postcss';

import packageJson from './package.json' assert { type: 'json' };

const moduleName = packageJson.name.replace(/^@.*\//, '');
const author = packageJson.author;
const banner = `
  /**
   * @license
   * author: ${author.name}
   * ${moduleName}.js v${packageJson.version}
   * Released under the ${packageJson.license} license.
   */
`;

export default defineConfig([
  {
    input: 'src/index.ts',
    external: ['react-dom', 'flowbite', 'flowbite-react', 'csstype'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        banner,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        banner,
      },
    ],
    plugins: [
      tsConfigPaths(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        extract: false,
      }),
      terser(),
    ],
  },
  {
    input: 'dist/cjs/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
]);
