/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { toast } from 'react-toastify';



function Header() {

  const { cartItems } = useSelector ( state => state.cartReducer)
  const { user } = JSON.parse(localStorage.getItem('currentUser'))

  const logout = () => {
    localStorage.removeItem('currentUser')
    window.location.reload()
    toast.error('user successfully logged out')
  }


  return (
    <div className='header'>
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
                  {user.email.substring(0, user.email.length-10)}
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/" className="nav-link">
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/" className="nav-link"
                onClick={logout}>
                  Logout
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <FaShoppingCart /> { cartItems.length }
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
