import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import data from '../static/data';
import Layout from '../components/Layout';
import { CartContext } from '../components/context/CartContext';
import CartStyles from '../components/styles/CartStyles';

const Cart = ({ query }) => {
  const { cart, addToCart } = useContext(CartContext);

  const cartProducts = c
  return (
    <Layout>
      <CartStyles>
        <h1>
          <span>Mulo</span> Cart
        </h1>
        {!cart.length ? (
          <h1>
            Nothing is in your <span>Mulo</span> cart.{' '}
            <Link>
              <a href="/products">Start shopping today.</a>
            </Link>
          </h1>
        ) : (
          <div>
            <h1>
              Welcome to your <span>Mulo</span> Cart. You have <span>{cart.length}</span> item{cart.length > 1 && 's'}.
            </h1>
            <div className="cart-information">
              <ul>
                {cart.map{}}
              </ul>
            </div>
          </div>
        )}
      </CartStyles>
    </Layout>
  );
};

Cart.propTypes = {
  query: PropTypes.object.isRequired,
};

export default Cart;
