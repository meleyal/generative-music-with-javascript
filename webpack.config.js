const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const SAMPLES_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/samples'
    : 'https://unpkg.com/tuplet/samples'

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'tuplet.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: 'samples', to: 'samples' }]),
    new webpack.DefinePlugin({
      SAMPLES_URL: JSON.stringify(SAMPLES_URL),
    }),
  ],
  devServer: {
    contentBase: './',
    port: 3001,
    quiet: true,
    clientLogLevel: 'none',
    writeToDisk: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  devtool: 'inline-source-map',
}
