const path = require('path');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')


const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src')
        },
        plugins: [
            new SimpleProgressWebpackPlugin(),
        ]
    }
}
