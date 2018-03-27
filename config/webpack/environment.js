const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// https://github.com/graphql/graphql-language-service/issues/128
environment.plugins.append(
  'ContextReplacement',
  new webpack.ContextReplacementPlugin(/graphql-language-service-interface[\\/]dist$/, new RegExp(`^\\./.*\\.js$`))
)

environment.loaders.append('gql', {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: 'graphql-tag/loader'
})

module.exports = environment
