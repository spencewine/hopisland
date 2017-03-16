'use strict'

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const autoprefixer = require('autoprefixer');
const paths = require('./paths');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin('style.css');

const publicUrl = '';







module.exports = {
  devtool: 'source-map',
  entry  : [
    paths.indexJs
  ],
  eslint: {configFile: paths.eslint},
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: [
          paths.src
        ],
        loader: 'babel-loader',
        test  : /(\.js|\.jsx)$/
      },
      {
        exclude: /node_modules/,
        include: [
          paths.src
        ],

        // loader : extractSass.extract([ 'css', 'postcss', 'sass' ]),
        loaders: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ],
        test   : /\.scss$/
      },
      {
        loaders: [ 'style-loader', 'css-loader', 'postcss-loader' ],
        test   : /\.css$/
      },

      {
        exclude: /node_modules/,
        enforce: 'pre',
        loader : 'eslint-loader',
        query  : {presets: [ 'react', 'latest' ]},
        test   : /\.jsx$/,
      }

    ],
  output: {
    filename  : 'bundle.js',
    path      : paths.dist,
    publicPath: '/'
  },
  plugins: [
    extractSass,
    new InterpolateHtmlPlugin({PUBLIC_URL: publicUrl}),
    new HtmlWebpackPlugin({
      inject  : true,
      template: paths.appHtml
    }),
    new CaseSensitivePathsPlugin(),
    new WatchNodeModulesPlugin(paths.appNodeModules),
    new webpack.HotModuleReplacementPlugin({multistep: true})
  ],
  postcss: () => [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ],
  resolve: {
    alias: {
      basscss    : paths.resolve(paths.nodeModules, 'basscss', 'css', 'basscss.css'),
      nodeModules: paths.nodeModules
    }
  }
};
