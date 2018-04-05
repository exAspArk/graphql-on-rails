const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// https://github.com/graphql/graphql-language-service/issues/128
environment.plugins.append(
  'ContextReplacement',
  new webpack.ContextReplacementPlugin(/graphql-language-service-interface[\\/]dist$/, new RegExp(`^\\./.*\\.js$`))
)

module.exports = environment
