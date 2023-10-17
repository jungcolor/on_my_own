const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const productConfig = require('./webpack.prod');
const developmentConfig = require('./webpack.dev');

module.exports = (env, args) => {
    switch (args.mode) {
        case 'development':
            return merge(commonConfig, developmentConfig);
        case 'production':
            return merge(commonConfig, productConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
};
