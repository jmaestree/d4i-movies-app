const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = (env, argv) => {
  const plugins = [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' })
  ];

  if (process.env.ANALYZER === 'true') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: [
      './src/index.jsx',
    ],
    output: {
      path: path.resolve(__dirname, process.env.BUILD_PATH),
      publicPath: '/',
      filename: 'main.js',
    },
    module: {
      rules: [{
        // JS - JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }, {
        // SCSS
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]',
            },
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
          },
        ],
      }, {
        // ESLINT
        test: /\.(js|jsx)$/,
        exclude: /nodes_modules/,
        use: 'eslint-loader',
      }, {
        // HTML
        test: /\.html$/,
        use: 'html-loader',
      }],
    },
    plugins,
    devtool: (argv.mode === 'development') ? 'source-map' : false,
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
    },
  };
};
