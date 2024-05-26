const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].bundle.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|webp|avif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name].[hash][ext]',
        },
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      scriptLoading: 'defer',
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/generic.html',
      filename: 'generic.html',
      scriptLoading: 'defer',
      minify: false
    }),
    // new HtmlWebpackPlugin({
    //   template: 'src/elements.html',
    //   filename: 'elements.html',
    //   scriptLoading: 'defer',
    //   minify: false
    // }),
  ]
}