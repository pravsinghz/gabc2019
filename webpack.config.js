const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const moment = require('moment');

const version = moment().utc();
const timestamp = version.format('YYYY-MM-DD-HH-mm');

module.exports = (env) => {

  const production = env === 'production';

  return {
    entry: [
      resolve(__dirname, './src/app')
    ],
    output: {
      filename: `bundle-${timestamp}.js`,
      path: resolve(__dirname, 'docs'),
      publicPath: production ? '/gabc2019/' : '/'
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader' // translates CSS into CommonJS
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    }
  };
};