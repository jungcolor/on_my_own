const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML 플러그인

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js',
        clean: true,
    },
    devServer: {},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 제외할 폴더
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true // 바벨 캐시 설정
                    }
                }
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
    stats: {
        preset: 'minimal',
        moduleTrace: true, // 종속성 경고/에러 표시
        errorDetails: true, // 에러 세부 정보
        chunks: true
    }
}