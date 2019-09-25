import Toggle from 'react-toggle';
import React, { useContext, useEffect, useState } from 'react';
import Link from './Link';
import { DarkContext } from './context/DarkContext';
import { UserContext } from './context/UserContext';
import { CartContext } from './context/CartContext';

const NavLinks = () => {
  const { user, userLoading } = useContext(UserContext);
  const { cart, addToCart, cartLoading } = useContext(CartContext);

  useEffect(() => {
    console.log('HELLO CONTEXT');
  }, []);

  return (
    <>
      <Link activeClassName="active" href="/">
        <a>HOME</a>
      </Link>
      <Link activeClassName="active" href="/products">
        <a>BROWSE</a>
      </Link>
      <Link activeClassName="active" href="/cart">
        <a>CART ({cart.length})</a>
      </Link>
      <Link activeClassName="active" href="/cart">
        <a>LOGIN</a>
      </Link>
    </>
  );
};
export default NavLinks;
