import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => (
  <header className="py-3">
    <div className="row">
      <div className="col-8">
        <h3><Link to="/" className="text-muted">GraphQL on Rails</Link></h3>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="text-muted" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
        </a>
        <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>
)

export default Navbar
