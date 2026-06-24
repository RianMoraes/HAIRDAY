const path = require("path") //sintax de import do NODE
const htmlWebpackPlugin = require("html-webpack-plugin")
const copyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    target: "web",
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"), //resolve navegação de pastas de acordo com o OS
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/", // 1. ALTERADO: Garante que os caminhos gerados sejam relativos à raiz do servidor    
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        liveReload: true,
        open: true,
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            favicon: path.resolve("src", "assets", "scissors.svg")
        }),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: path.resolve(__dirname, "dist", "assets")
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}