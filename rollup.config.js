import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
const banner = `/*
 * ${pkg.name} ${pkg.version}
 * ${pkg.description}
 * (c) 2013-2020, S. Andrew Sheppard
 * https://wq.io/license
 */
`;

export default [
    // ESM
    {
        input: 'index.js',
        plugins: [
            babel({
                configFile: false,
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                esmodules: true
                            }
                        }
                    ]
                ]
            })
        ],
        external: id => id === 'marked' || id.match(/^highlight\.js\/./),
        output: {
            banner,
            file: 'dist/index.es.js',
            format: 'esm'
        }
    },
    // CJS
    {
        input: 'index.js',
        plugins: [
            babel({
                configFile: false,
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 8
                            }
                        }
                    ]
                ]
            })
        ],
        external: id => id === 'marked' || id.match(/^highlight\.js\/./),
        output: {
            banner,
            file: 'dist/index.js',
            format: 'cjs'
        }
    },

    // UMD
    {
        input: 'index.js',
        plugins: [
            babel({
                configFile: false,
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                esmodules: true
                            }
                        }
                    ]
                ]
            }),
            {
                resolveId(source) {
                    if (source === './highlight') {
                        return { id: './highlight', external: true };
                    }
                }
            }
        ],
        external: ['marked'],
        output: [
            {
                name: 'chart',
                globals: { marked: 'marked', './highlight': 'hljs' },
                banner,
                file: 'dist/markdown.js',
                format: 'umd',
                sourcemap: true,
                indent: false
            }
        ]
    },
    {
        input: 'src/highlight.js',
        plugins: [commonjs(), resolve()],
        output: [
            {
                name: 'hljs',
                file: 'dist/highlight.js',
                format: 'umd',
                indent: false
            }
        ]
    }
];
