import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CartContext = React.createContext();

const CartProvider = props => {
  const [cart, setCart] = useState([]);
  const [cartError, setCartError] = useState(null);

  const addToCart = id => {
    if (cart === null) {
      setCart([id]);
    } else {
      const tempCart = cart;
      if (!tempCart.some(cartItem => cartItem === id)) {
        tempCart.push(id);
        setCart(tempCart);
      } else {
        setCartError('Item already in cart!');
      }
      console.log(tempCart);
    }
  };

  useEffect(() => {
    console.log('CONTEXT EFFECT');
  }, [cart.length]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CartProvider;
