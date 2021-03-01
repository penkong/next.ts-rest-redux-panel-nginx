const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const path = require('path')

module.exports = withFonts({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader'
      }
    })
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})
