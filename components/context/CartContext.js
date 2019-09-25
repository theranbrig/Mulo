import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CartContext = React.createContext();

const CartProvider = props => {
  const [cart, setCart] = useState([]);
  const [cartError, setCartError] = useState(null);
  const [cartLoading, setCartLoading] = useState(false);

  const addToCart = id => {
    setCartLoading(true);
    const tempCart = [...cart];
    if (!tempCart.some(cartItem => cartItem === id)) {
      tempCart.push(id);
      setCart(tempCart);
    } else {
      setCartError('Item already in cart!');
    }
    console.log(tempCart);
    setCartLoading(false);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = id => {
    const tempCart = [...cart];
    console.log('Old Cart', tempCart);
    const index = tempCart.indexOf(id);
    if (index > -1) {
      tempCart.splice(index, 1);
    }
    setCart(tempCart);
    console.log('New Cart', cart);
    console.log('Item Removed');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartLoading,
        cartError,
        setCartError,
        clearCart,
        removeFromCart,
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
