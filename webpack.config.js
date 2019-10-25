const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'gen.js',
    chunkFilename: 'gen.[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: 'src',
    port: 3001,
    quiet: true,
    clientLogLevel: 'none',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
