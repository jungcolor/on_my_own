const Dotenv = require('dotenv-webpack');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: false,
        hot: true,
        compress: true,
        port: 7070,
        historyApiFallback: true,
        liveReload: true,
    },
    output: {
        filename: '[name].[contenthash:8].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [postcssPresetEnv()],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new Dotenv({
            path: './env/.env.development',
        }),
    ],
};
