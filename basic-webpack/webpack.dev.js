const Dotenv = require('dotenv-webpack'); // Node에서 빌드할 때 환경별로 다른값을 넣어줄 수 있도록 도와주는 패키지

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
    plugins: [
        new Dotenv({
            path: './env/.env.development'
        })
    ],
}