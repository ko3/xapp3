const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath:'/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.join(__dirname, 'app'), 'node_modules']
  },
  devServer:{
    inline : true,
    port : 8080,
    historyApiFallback : true
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: '/index.html',
      inject: 'body'
    })
  ]
};
