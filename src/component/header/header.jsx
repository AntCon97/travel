import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='Logo' to='/'>
      Travel Website
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        Home
      </Link>
      <Link className='option' to='/about'>
        About
      </Link>
      <Link className='option' to='/tours'>
        Tours
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
