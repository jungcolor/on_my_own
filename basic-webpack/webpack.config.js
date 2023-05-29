const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML 플러그인
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css파일 자체로 불러오기 위한 플러그인
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|webp)$/i,
                type: 'asset', // 기본적으로 8kb 이하라면 url-loader로, 이상이면 file-loader로 동작
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 기준으로 4kb로 변경
                    }
                },
                generator: {
                    filename: 'assets/images/[name]_[contenthash:8][ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
}