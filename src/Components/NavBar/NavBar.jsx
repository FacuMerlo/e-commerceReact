import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      <Link to='/'>
        <div className='navBar-center'>
          <img src='https://i.ibb.co/gg5XfPV/logo-El-Potrero.png' alt='Logo' className='navBar-logo' />
          <h1 className='navBar-title'>EL POTRERO</h1>
        </div>
      </Link>
      <div>
        <ul>
          <li>
            <Link to={ '/categoria/botines' }>BOTINES</Link>
          </li>
          <li>
            <Link to={ '/categoria/camisetas' }>CAMISETAS</Link>
          </li>
          <li>
            <Link to={ '/categoria/shorts' }>SHORTS</Link>
          </li>
        </ul>
      </div>
      <div className='navBar-cart'>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;

