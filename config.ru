# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

ApolloTracing.start_proxy('config/apollo-engine-proxy.json')

run Rails.application
