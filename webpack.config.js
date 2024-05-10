const path = require('path');

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.compiled.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}