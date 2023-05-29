const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css파일 자체로 불러오기 위한 플러그인

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {},
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name]_[contenthash:8].css'
        })
    ]
}