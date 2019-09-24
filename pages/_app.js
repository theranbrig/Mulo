import React from 'react';
import App, { Container } from 'next/app';
import DarkProvider from '../components/context/DarkContext';
import UserProvider from '../components/context/UserContext';
import CartProvider from '../components/context/CartContext';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserProvider>
        <CartProvider>
          <DarkProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </DarkProvider>
        </CartProvider>
      </UserProvider>
    );
  }
}
