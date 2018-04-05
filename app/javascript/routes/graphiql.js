import React from 'react'
import GraphiQL from 'graphiql'

import './graphiql.css'

const graphQLFetcher = (graphQLParams) => (
  fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json())
)

export default () => <GraphiQL fetcher={graphQLFetcher} />
