import React from 'react'
import Navbar from '../components/navbar'
import { Link } from "react-router-dom"
import { Query } from 'react-apollo'

import query from './home.gql'

const Home = () => {
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
            <h1 className="display-4">REST-in-peace API vs GraphQL</h1>
            <p className="lead my-3">GraphQL is one of the most hot topics at RailsConf 2018. ts popularity is growing rapidly. A lot of companies such as Facebook, GitHub, Twitter, Coursera, Shopify are using it. Why?</p>
            <p className="lead mb-0">
              <Link to="/posts/1" className="text-white font-weight-bold">Continue reading...</Link>
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
                  <Link to="/posts/2" className="text-dark">Making Client and Server Fit Together with GraphQL</Link>
                </h3>
                <div className="mb-1 text-muted">
                  <span>March 19, 2018 by </span>
                  <a href="#">tenderlove</a>
                </div>
                <p className="card-text mb-auto">What is GraphQL? Is it possible to gradually migrate an existing old Rails application to GraphQL?</p>
                <Link to="/posts/2" className="my-2" href="#">Continue reading...</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card flex-row mb-4 box-shadow h-250">
              <div className="card-body d-flex flex-column align-items-start">
                <h3 className="mb-0">
                  <Link to="/posts/3" className="text-dark">Should Rubyists learn modern JS?</Link>
                </h3>
                <div className="mb-1 text-muted">
                  <span>March 19, 2018 by </span>
                  <a href="#">eileencodes</a>
                </div>
                <p className="card-text mb-auto">React, Angular, Vue, Elm, Stimulus, etc. How to stay staying sane in this insane world?</p>
                <Link to="/posts/3" className="my-2" href="#">Continue reading...</Link>
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
      console.log(props)
      return <Home />
    }}
  </Query>
)
