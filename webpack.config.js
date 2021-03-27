const path = require('path');

module.exports = {
    entry: './src/app/index.ts',
    // mode: 'production',
    mode: 'production',
    devtool: 'inline-source-map',
   
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js/')
    },
    module: {
        rules: [
            {
                use: ['ts-loader'],
                exclude: '/node-modules/',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}