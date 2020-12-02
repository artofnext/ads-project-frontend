module.exports = {
  css: {
    sourceMap: true
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  devServer: {
    port: 8081,
  },
}