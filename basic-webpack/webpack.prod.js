const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css파일 자체로 불러오기 위한 플러그인
const Dotenv = require('dotenv-webpack'); // Node에서 빌드할 때 환경별로 다른값을 넣어줄 수 있도록 도와주는 패키지

// prodction minimizer plugin
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // CSS 공백제거 등 압축을 해주는 패키지
const TerserPlugin = require('terser-webpack-plugin'); // js 코드 난독화 및 압축

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
        }),
        new Dotenv({
            path: './env/.env.production'
        })
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
    }
}