import React, { useState, useContext } from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { HamburgerSqueeze } from 'react-animated-burgers';
import PropTypes from 'prop-types';
import Link from './Link';
import NavLinks from './NavLinks';
import NavStyles from './styles/NavStyles';
import { DarkContext } from './context/DarkContext';

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(DarkContext);

  return (
    <NavStyles>
      <div className='navigation'>
        <div className='main-logo'>
          <Link href='/'>
            <div className='nav-logo'>
              <img
                src='https://res.cloudinary.com/dq7uyauun/image/upload/v1569432088/untitled_5.jpg'
                alt='logo'
              />
              <h1>MULO</h1>
            </div>
          </Link>
        </div>
        <div className='desktop-nav-links'>
          <NavLinks />
        </div>
      </div>
    </NavStyles>
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
