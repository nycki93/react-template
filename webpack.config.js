const path = require('node:path');

module.exports = {
    mode: 'none',
    entry: { },
    output: {
        path: path.resolve(__dirname, 'site'),
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'site-static'),
        },
    },
};
