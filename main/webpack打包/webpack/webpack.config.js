let HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const { Compilation } = require('webpack');
module.exports = function(env) {
    return {
        mode: env || 'production',
        entry: {
            index: './src/index.js',
            indexCopy: './src/index copy.js'
        },
        output: {
            filename: '[name].[contenthash].js',
            library: '[name]',
            // filename: '[name].[hash].js',
            // filename: '[name].[chunkhash].js',
            // 需要声明path 不然CleanWebpackPlugin会报错
            path: __dirname + '/dist',
        },
        devServer: {
            port: 8080,
            open: true,
            contentBase: './dist',
            proxy: {
                '/mock': {
                    target: 'http://www.ph.com/:80',
                    changeOrigin: true,
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    // 打包文件并引入html
                    use: [MiniCssExtractPlugin.loader,'css-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        // 需要兼容到以下浏览器的什么版本
                                        "targets": {
                                            "ie": 7,
                                            "edge": "17",
                                            "firefox": "60",
                                            "chrome": "67",
                                            "safari": "11.1",
                                        },
                                        // 按需加载
                                        "useBuiltIns": "usage",
                                        "corejs": '3.13.0'
                                    }
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['*'],
            }),
            // 处理css文件
            new MiniCssExtractPlugin({
                filename: '[name][chunkhash].css'
            }),
            {
                apply: (compiler) => {
                    compiler.hooks.environment.tap('test', () => {
                        console.log('在编译器准备环境时调用，时机就在配置文件中初始化插件之后')
                    })
                    compiler.hooks.afterEnvironment.tap('test', () => {
                        console.log('当编译器环境设置完成后，在 environment hook 后直接调用。')
                    })
                    compiler.hooks.entryOption.tap('test', (context, entry) => {
                        console.log('在 webpack 选项中的 entry 被处理过之后调用。')
                    })
                    compiler.hooks.afterPlugins.tap('test', () => {
                        console.log('在初始化内部插件集合完成设置之后调用。')
                    })
                    // webpack构建开始前执行
                    compiler.hooks.run.tap('test', (compilation) => {
                        console.log('afterEnvironment')
                    })
                    compiler.hooks.compile.tap('test', () => {
                        console.log('构建中开始，开始构建options模块，构建compilation对象')
                    })
                    compiler.hooks.done.tap('test', () => {
                        console.log('在 compilation 完成时执行')
                    })
                    compiler.hooks.afterEmit.tap('test', () => {
                        console.log('输出 asset 到 output 目录之后执行。')
                    })
                    compiler.hooks.watchClose.tap('test', () => {
                        console.log('在一个观察中的 compilation 停止时执行')
                    })
                }
            }
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
            }
        }
    }
}