const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, './public_html'),
    filename: './assets/js/bundle.js',
    assetModuleFilename: './assets/[name][ext]'
  },
  devServer: {
    static: path.resolve(__dirname, 'src'),
    hot: true,
    open: ['/profile'],
    host: '0.0.0.0',
    port: '8080',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              url: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-sort-media-queries')({
                    sort: 'mobile-first',
                  })
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)/,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            const filePath = path
              .dirname(pathData.filename)
              .split('/')
              .slice(1)
              .join('/');
            return `${filePath}/[name][ext]`;
          },
        },
        use: [
          {
            loader: 'image-webpack-loader',
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/font/[name][ext]',
        }
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            exclude: /\.vue$/,
            use: [
              {
                loader: 'html-loader',
              },
              {
                loader: 'pug-plain-loader',
                options: {
                  pretty: true,
                  basedir: 'src/templates/'
                }
              }
            ]
          },
          {
            use: ['vue-pug-loader']
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/pages/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/pages/profile/index.pug',
      filename: 'profile/index.html',
    }),
    new StylelintPlugin(),
    new VueLoaderPlugin(),
  ]
};
