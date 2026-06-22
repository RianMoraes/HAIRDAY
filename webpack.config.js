const path = require("path") //sintax de import do NODE

module.exports = {
    target: "web",
    mode: "development",

    entry: path.resolve(__dirname,  "src", "main.js"), //resolve navegação de pastas de acordo com o OS
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
}