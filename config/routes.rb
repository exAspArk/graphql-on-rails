Rails.application.routes.draw do
  root 'application#index'

  post "/graphql", to: "graphql#execute"

  get '*path', to: 'application#index'
end
