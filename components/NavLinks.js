import Toggle from 'react-toggle';
import React, { useContext, useEffect, useState } from 'react';
import Link from './Link';
import { DarkContext } from './context/DarkContext';
import { UserContext } from './context/UserContext';
import { CartContext } from './context/CartContext';

const NavLinks = () => {
  const { user, userLoading } = useContext(UserContext);
  const { cart, addToCart, setCart } = useContext(CartContext);

  return (
    <>
      <Link activeClassName="active" href="/">
        <a>Home</a>
      </Link>
      <Link activeClassName="active" href="/products">
        <a>Browse</a>
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
          <a>Cart ({cart.length})</a>
        </Link>
      )}
    </>
  );
};
export default NavLinks;
