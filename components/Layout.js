import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import { DarkContext } from './context/DarkContext';
import { CartContext } from './context/CartContext';

const darkTheme = {
  darkBlack: '#fff',
  black: '#fff',
  white: '#232323',
  blue: '#438948',
  transparent: '#13131394',
  raleFont: 'Raleway',
  robFont: 'Roboto',
  rightFont: 'Oswald',
};
const lightTheme = {
  darkBlack: 'gainsboro',
  black: 'white',
  white: '#232323',
  blue: '#40a4c8',
  transparent: '#f3f3f394',
  raleFont: 'Raleway',
  robFont: 'Roboto',
  rightFont: 'Righteous',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
  }
`;

// later in your app
const Layout = props => {
  const { darkMode, toggleDarkMode } = useContext(DarkContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {props.children}
        <Footer darkMode={darkMode} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
