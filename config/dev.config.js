const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      seeder: path.resolve(process.cwd(), './src/seeder/index.js'),
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(process.cwd(), 'lib'),
    },
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  }
}
