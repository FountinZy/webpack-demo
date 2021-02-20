const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'ZY-zy',
        template: 'src/assets/index.html'
      })
  ],
  module: {
    rules: [
              {
        test: /\.(png|svg|jpg|gif)$/,
        use:
        ["file-loader" ]
      },
      {
        test: /\.styl$/,
        use: [
            "style-loader",
            "css-loader",
            "stylus-loader",
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};


