const path = require("path");
module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/react-ssr/server.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
};
