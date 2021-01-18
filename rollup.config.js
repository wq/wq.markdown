import pkg from './package.json';
import wq from '@wq/rollup-plugin';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';

const banner = `/*
 * ${pkg.name} ${pkg.version}
 * ${pkg.description}
 * (c) 2013-2020, S. Andrew Sheppard
 * https://wq.io/license
 */
`;

const config = {
        input: 'src/index.js',
        plugins: [
            wq(),
            nodePolyfills(),
            babel({
                plugins: ['@babel/transform-react-jsx'],
                babelHelpers: 'inline',
            }),
            commonjs(),
            resolve(),
            terser({ keep_fnames: /^([A-Z]|use[A-Z])/ }), // Preserve component & hook names
            json(),
            analyze({ limit: 10 }),
        ],
        output: {
            file: 'markdown.js',
            banner,
            format: 'esm',
            sourcemap: true,
        },
    },
    replaceConfig = {
        'process.env.NODE_ENV': '"production"',
        'proc.cwd()': '""',
        'module.exports = browser$1;': '',
        delimiters: ['', ''],
    };

export default [
    {
        ...config,
        plugins: [
            replace({
                ...replaceConfig,
                './wq.js': 'https://unpkg.com/wq',
            }),
            ...config.plugins,
        ],
        output: {
            ...config.output,
            file: 'markdown.js',
            sourcemapPathTransform(path) {
                return path.replace('./', 'wq/markdown/');
            },
        },
    },
    {
        ...config,
        plugins: [replace(replaceConfig), ...config.plugins],
        output: { ...config.output, file: 'static/app/js/markdown.js' },
    },
];
