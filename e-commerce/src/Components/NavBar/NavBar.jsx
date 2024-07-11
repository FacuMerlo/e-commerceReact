import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='navBar'>
      <h1>Logo E-Commerce</h1>
      <CartWidget />
    </div>
  )
}

export default NavBar
