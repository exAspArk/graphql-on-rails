// @flow

import React from 'react'
import Navbar from '../components/navbar'
import { Link } from "react-router-dom"
import { Query } from 'react-apollo'

import query from './home.gql'

const Home = (props: HomeQuery) => {
  const [post1, post2, post3] = props.posts

  return (
    <div>
      <div className="container">
        <Navbar />

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#">Ruby</a>
            <a className="p-2 text-muted" href="#">Rails</a>
            <a className="p-2 text-muted" href="#">GraphQL</a>
            <a className="p-2 text-muted" href="#">JavaScript</a>
            <a className="p-2 text-muted" href="#">React</a>
            <a className="p-2 text-muted" href="#">Webpack</a>
            <a className="p-2 text-muted" href="#">Babel</a>
          </nav>
        </div>

        <div className="jumbotron d-flex p-5 text-white rounded bg-dark">
          <div className="col-6 px-0">
            <h1 className="display-4">{post1.title}</h1>
            <p className="lead my-3">{post1.description}</p>
            <p className="lead mb-0">
              <Link to={`/posts/${post1.id}`} className="text-white font-weight-bold">Continue reading...</Link>
            </p>
          </div>
          <div className="col-6 px-0 mx-auto">
            <img src="/graphql-on-rails.png" style={{width: '100%', marginTop: '40px'}} />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-6">
            <div className="card flex-row mb-4 box-shadow h-250">
              <div className="card-body d-flex flex-column align-items-start">
                <h3 className="mb-0">
                  <Link to={`/posts/${post2.id}`} className="text-dark">{post2.title}</Link>
                </h3>
                <div className="mb-1 text-muted">
                  <span>{(new Date(post2.createdAt)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} by </span>
                  <a href="#">{post2.user.name}</a>
                </div>
                <p className="card-text mb-auto">{post2.description}</p>
                <Link to={`/posts/${post2.id}`} className="my-2" href="#">Continue reading...</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card flex-row mb-4 box-shadow h-250">
              <div className="card-body d-flex flex-column align-items-start">
                <h3 className="mb-0">
                  <Link to={`/posts/${post3.id}`} className="text-dark">{post3.title}</Link>
                </h3>
                <div className="mb-1 text-muted">
                  <span>{(new Date(post3.createdAt)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} by </span>
                  <a href="#">{post3.user.name}</a>
                </div>
                <p className="card-text mb-auto">{post3.description}</p>
                <Link to={`/posts/${post3.id}`} className="my-2" href="#">Continue reading...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <Query query={query}>
    {(props) => {
      if (props.loading) return <div>Loading...</div>
      if (props.error) return <div>Error =/</div>
      return <Home posts={props.data.posts} />
    }}
  </Query>
)
