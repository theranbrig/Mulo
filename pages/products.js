import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProductsPageStyles from '../components/styles/ProductsPageStyles';
import { products } from '../static/data';

const Contact = () => {
  const calculateMoney = amount => `$${amount / 100}`;

  return (
    <Layout>
      <Head>
        <title>MULO | Products</title>
      </Head>
      <ProductsPageStyles>
        <div className="title">
          <h1>
            Browse <span className="title-logo">MULO</span> Products
          </h1>
        </div>
        <div className="products-list">
          {products.map(product => (
            <Link key={product.id} href={{ pathname: '/item', query: { id: product.id } }}>
              <a>
                <div>
                  <img src={product.image} />
                  <h3>{product.name}</h3>
                  <p>
                    <span className="discount-price">{calculateMoney(product.price)}</span>
                  </p>
                  <p>Rating: {product.rating}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </ProductsPageStyles>
    </Layout>
  );
};

export default Contact;
