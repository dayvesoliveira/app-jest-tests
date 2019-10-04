const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    //entry: ["@babel/polyfill", "./src/index.js"],
    output:{
        path: path.resolve(__dirname, '/dist'),
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
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3000,
        overlay: {
            warnings: true,
            errors: true
        }
    }
}