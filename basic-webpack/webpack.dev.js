const Dotenv = require('dotenv-webpack'); // Node에서 빌드할 때 환경별로 다른값을 넣어줄 수 있도록 도와주는 패키지
const postcssPresetEnv = require('postcss-preset-env'); // css 후처리기 패키지

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {},
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
                                plugins: [postcssPresetEnv()] // autoprefix를 사용하기 위한 플러그인
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new Dotenv({
            path: './env/.env.development'
        })
    ],
}