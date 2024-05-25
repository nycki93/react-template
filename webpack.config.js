const path = require('node:path');

module.exports = {
    mode: 'development',
    entry: { 
        index: './site-source/index.tsx',  
    },
    output: {
        path: path.resolve(__dirname, 'site'),
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'site-static'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
