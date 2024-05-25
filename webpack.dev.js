const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      },
    ]
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'assets'),
    },
    compress: true,
    watchFiles: ['src/**/*.html', 'assets/**/*'],
    port: 8000,
    host: '0.0.0.0',
  }

});
