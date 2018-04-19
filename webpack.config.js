const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    popper: 'Popper'
  },
  devServer: {
    compress: true,
    // historyApiFallback: true,
    hot: true,
    historyApiFallback: {
      rewrites: [
        // shows views/landing.html as the landing page
        { from: /movies.json$/, to: '/src/movies.json' },
      ]
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'template.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
