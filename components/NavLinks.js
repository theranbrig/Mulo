import Toggle from 'react-toggle';
import React, { useContext } from 'react';
import Link from './Link';
import { DarkContext } from './context/DarkContext';
import { UserContext } from './context/UserContext';

const NavLinks = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkContext);
  const { user, userLoading } = useContext(UserContext);
  return (
    <>
      <Link activeClassName="active" href="/">
        <a>Home</a>
      </Link>
      <Link activeClassName="active" href="/products">
        <a>Products</a>
      </Link>
      <Link activeClassName="active" href="/about">
        <a>About</a>
      </Link>
      {userLoading && <a>Loading...</a>}
      {user ? (
        <Link activeClassName="active" href="/contact">
          <a>Contact</a>
        </Link>
      ) : (
        <Link activeClassName="active" href="/contact">
          <a>Sign In</a>
        </Link>
      )}
    </>
  );
};
export default NavLinks;
