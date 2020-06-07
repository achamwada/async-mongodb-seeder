const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = () => {
  return {
    mode: 'production',
    entry: {
      main: path.resolve(process.cwd(), './src/seeder/index.js'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(process.cwd(), 'lib'),
      libraryTarget: 'commonjs2',
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
      ],
    },
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [new CleanWebpackPlugin()],
  }
}
