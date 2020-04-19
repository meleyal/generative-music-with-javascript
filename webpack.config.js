const webpack = require('webpack')

const SAMPLES_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/samples'
    : 'https://unpkg.com/tuplet/samples'

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'tuplet.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      SAMPLES_URL: JSON.stringify(SAMPLES_URL),
    }),
  ],
  devServer: {
    contentBase: 'src',
    port: 3001,
    quiet: true,
    clientLogLevel: 'none',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
