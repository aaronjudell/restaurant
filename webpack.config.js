const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'The Ace Restaurant',
        filename: 'index.html',
        inject: 'head',
        scriptLoading: 'defer',
    })
  ]
};