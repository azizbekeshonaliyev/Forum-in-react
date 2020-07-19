var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
}
