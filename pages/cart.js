import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import { products } from '../static/data';
import Layout from '../components/Layout';
import { CartContext } from '../components/context/CartContext';
import CartStyles from '../components/styles/CartStyles';

const Cart = ({ query }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

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

    setLoading(false);
  }, [cart]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <Layout>
      <>
        <Head>
          <title>MULO | Cart</title>
        </Head>
        <CartStyles>
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
                          <button className="remove-button">Remove From Cart</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="purchase-info">
                  <h2>Total: <span>{calculateMoney(total)}</span></h2>
                  <button>BUY NOW</button>
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
