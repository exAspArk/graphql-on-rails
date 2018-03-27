// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Home from '../routes/home'
import Post from '../routes/post'
import Graphiql from '../routes/graphiql'

const apolloClient = new ApolloClient({ uri: 'http://localhost:3001/graphql' })

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/graphiql" component={Graphiql} />
      </div>
    </Router>
  </ApolloProvider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')))
})
