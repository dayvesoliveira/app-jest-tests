const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {  
                test: /\.scss$/,  
                use: ['style-loader', 'css-loader', 'sass-loader']  
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            favicon:  './src/favicon.ico'
        })
    ],
    optimization: {
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
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
    },
}