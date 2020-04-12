const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'tuplet.js',
  },
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
