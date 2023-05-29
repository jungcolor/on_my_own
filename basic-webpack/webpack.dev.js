const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML 플러그인
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css파일 자체로 불러오기 위한 플러그인

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
}