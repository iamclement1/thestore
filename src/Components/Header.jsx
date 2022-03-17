/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            The Store
          </Link>
          <button className='navbar-toggler'
          type='button' data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'> </span>
          </button>
          <div className='collapse navbar-collapse'
          id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link to="/" className='nav-link active' aria-current='page'>
                  User
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/" className="nav-link">
                  Orders
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/" className="nav-link">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
