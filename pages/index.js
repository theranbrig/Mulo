/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React, { useContext } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import HomePageStyles from '../components/styles/HomePageStyles';
import { DarkContext } from '../components/context/DarkContext';
import { UserContext } from '../components/context/UserContext';

const Home = () => {
  const { darkMode } = useContext(DarkContext);
  const { user, userLoading } = useContext(UserContext);

  return (
    <Layout>
      <Head>
        <title>MULO | Online Thrift Store</title>
      </Head>
      <HomePageStyles>
        <div className='main-content'>
          <div className='side-pictures' />
          <div className='title-box'>
            <button>
              <Link href='/products'>
                <a>
                  Shop Now <i className='fas fa-arrow-right' />
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className='divider'>
          <p>They Loved It. You'll Love It.</p>
          <p>
            Try it on before you buy it with <span>MULO AR</span>. <br />
            <Link href='/contact'>
              <a>See Our Latest Fashion Choices</a>
            </Link>
          </p>
        </div>
        <div className='about-layout'>
          <div className='about-1'>
            <img
              src='https://images.unsplash.com/photo-1557673862-a2a470406a30?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
              alt='quality and authenticity'
            />
            <h3>Quality & Authenticity</h3>
            <p>
              Before your arriving at your doorsteps, every product on our website goes through the
              process of careful inspection to ensure authenticity and condition of the product. We
              do this to make sure that you receive exactly what you have paid for.
            </p>
          </div>
          <div className='about-2'>
            <img
              src='https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
              alt='cutomer protection'
            />
            <h3>Customer Protection</h3>
            <p>
              At every step of our business, we do everything in our power to provide safe and
              secure transactions. For that reason, all of the payments made by the buyers go to us
              first. Only after we check your products, the money will be sent to the sellers.
            </p>
          </div>
          <div className='about-3'>
            <img
              src='https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
              alt='environmentally friendly'
            />
            <h3>Environmentally Friendly</h3>
            <p>
              By purchasing second hand products, you help to decrease environmental footprint and
              contribute to the animal welfare. Our company believes that though conscious
              consumption consumers can enjoy high-quality products without polluting the
              environment.
            </p>
          </div>
        </div>
      </HomePageStyles>
    </Layout>
  );
};

export default Home;
