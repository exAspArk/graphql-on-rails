// @flow

import React from 'react'
import { Query } from 'react-apollo'
import Navbar from '../components/navbar'

import query from './post.gql'

const Post = ({ post }: PostQuery) => (
  <div>
    <div className="container">
      <Navbar />
      <main role="main">
        <div className="row">
          <div className="col-md-8">
            <div>
              <h2>{post.title}</h2>

              <p>
                <span>{(new Date(post.createdAt)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} by </span>
                <a href="#">{post.user.name}</a>
              </p>

              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 bg-light rounded">
              <h4>About</h4>
              <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>

            <div className="p-3">
              <h4>Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="https://github.com/exaspark">GitHub</a></li>
                <li><a href="https://twitter.com/exaspark">Twitter</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>
)

export default (props: { match: { params: { id: string } } }) => {
  const variables: PostQueryVariables = { id: props.match.params.id };

  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error =/</div>

        return <Post post={data.post} />
      }}
    </Query>
  )
}
