const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [ {
      test: /\.jpeg$/, 
      use: 'url-loader'
    }]},
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
    })
  ]
};