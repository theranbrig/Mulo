import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import StripeCheckout from 'react-stripe-checkout';
import { products } from '../static/data';
import Layout from '../components/Layout';
import { CartContext } from '../components/context/CartContext';
import CartStyles from '../components/styles/CartStyles';

const Cart = ({ query }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [successMessage, setSuccessMessage] = useState(false);

  const calculateMoney = amount => `$${amount / 100}`;

  useEffect(() => {
    setLoading(true);
    const tempProducts = [];
    cart.forEach(cartItem => {
      products.forEach(product => {
        if (cartItem === product.id) {
          tempProducts.push(product);
        }
      });
    });
    setCartProducts([...tempProducts]);
    console.log(cartProducts);
    if (tempProducts.length) {
      const tempTotal = tempProducts
        .map(function(product) {
          return product.price;
        })
        .reduce(function(price, constant) {
          return price + constant;
        });
      setTotal(tempTotal);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [cart]);

  const onToken = token => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        console.log(data);
      });
      setTotal(0);
      clearCart();
      setSuccessMessage(true);
    });
  };

  if (loading)
    return (
      <Layout>
        <CartStyles>
          <h1>Getting Cart Information</h1>
        </CartStyles>
      </Layout>
    );
  return (
    <Layout>
      <>
        <Head>
          <title>MULO | Cart</title>
        </Head>
        <CartStyles>
          {!cart.length ? (
            <div>
              {successMessage ? (
                <div className="order-success">
                  <h1>
                    Your <span>Mulo</span> order is on it's way.
                  </h1>
                  <Link>
                    <a href="/products">Browse more great products.</a>
                  </Link>
                </div>
              ) : (
                <h1>
                  Nothing is in your <span>Mulo</span> cart.{' '}
                  <Link>
                    <a href="/products">Start shopping today.</a>
                  </Link>
                </h1>
              )}
            </div>
          ) : (
            <div>
              <h1>
                Welcome to your <span>Mulo</span> Cart. You have <span>{cart.length}</span> item
                {cart.length > 1 && 's'}.
              </h1>
              <div className="cart-information">
                <ul>
                  {cartProducts.map(product => (
                    <li key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <div className="information">
                        <div className="name-rating">
                          <h2>{product.name}</h2>
                          <h3>Rating: {product.rating}</h3>
                        </div>
                        <div className="price-button">
                          <h4 className="original">
                            Original Price: <span>{calculateMoney(product.originalPrice)}</span>
                          </h4>
                          <h4 className="sale">
                            Sale Price: <span>{calculateMoney(product.price)}</span>
                          </h4>
                          <button onClick={() => removeFromCart(product.id)} className="remove-button">
                            Remove From Cart
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="purchase-info">
                  <h2>
                    Total: <span>{calculateMoney(total)}</span>
                  </h2>
                  <StripeCheckout
                    amount={total} // cents
                    name="Mulo"
                    description="Great Mulo Thrift Products"
                    stripeKey="pk_test_lbxXvcYXX2J1PsUyFw9bIPT7"
                    currency="USD"
                    email="user@email.com"
                    token={() => onToken()}
                  >
                    <button>BUY NOW</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          )}
        </CartStyles>
      </>
    </Layout>
  );
};

Cart.propTypes = {
  query: PropTypes.object.isRequired,
};

export default Cart;
