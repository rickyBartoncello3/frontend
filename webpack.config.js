const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
entry: path.resolve(__dirname, 'src', 'index.tsx'),

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'bundle.[contenthash].js' : 'bundle.js',
      clean: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],

    devtool: isProd ? 'source-map' : 'eval-source-map',

    devServer: {
      static: { directory: path.resolve(__dirname, 'dist') },
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  };
};
