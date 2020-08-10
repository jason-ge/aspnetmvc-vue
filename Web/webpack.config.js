const path = require('path')
const fs = require('fs')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const appBasePath = './src/app/'
var jsEntries = {}
// We search for .js files inside basePath  + 'employee/' folder and make those as entries
fs.readdirSync(appBasePath + 'entries/').forEach(function (name) {
    jsEntries[name.substring(0, name.lastIndexOf('.'))] = appBasePath + 'entries/' + name
})

jsEntries['main'] = appBasePath + 'main.js'
console.log(jsEntries);
module.exports = {
    entry: jsEntries,
    output: {
        path: path.resolve(__dirname, './Scripts/'),
        publicPath: '/Scripts/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', 
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devServer: {
        proxy: {
            '*': {
                target: 'http://localhost:5002',
                changeOrigin: true
            }
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ],
    devtool: '#eval-source-map',
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "all",
                    name: "vendors",
                    enforce: true
                }
            },
        },
    },
}

if (process.env.NODE_ENV === 'production') {
    console.log('webpack in production mode')
    module.exports.devtool = ''
    module.exports.optimization = {
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        splitChunks: {
            hidePathInfo: true,
            minSize: 30000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "all",
                    name: "vendors",
                    enforce: true
                }
            },
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                }
            })
        ],
    };
}
