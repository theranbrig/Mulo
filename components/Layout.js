import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import { DarkContext } from './context/DarkContext';

const darkTheme = {
  darkBlack: '#454545',
  black: '#343434',
  white: 'white',
  blue: 'rgb(23, 211, 211)',
  transparent: '#13131394',
  raleFont: 'Raleway',
  robFont: 'Roboto',
  rightFont: 'Righteous',
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
  /* raleway-300 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    src: url('../static/fonts/raleway-v14-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Raleway Light'), local('Raleway-Light'),
        url('../static/fonts/raleway-v14-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/raleway-v14-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/raleway-v14-latin-300.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/raleway-v14-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/raleway-v14-latin-300.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('../static/fonts/raleway-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Raleway'), local('Raleway-Regular'),
        url('../static/fonts/raleway-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/raleway-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/raleway-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/raleway-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/raleway-v14-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  raleway-600 - latin
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src: url('../static/fonts/raleway-v14-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url('../static/fonts/raleway-v14-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/raleway-v14-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/raleway-v14-latin-600.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/raleway-v14-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/raleway-v14-latin-600.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* righteous-regular - latin */
  @font-face {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    src: url('../static/fonts/righteous-v8-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Righteous'), local('Righteous-Regular'),
        url('../static/fonts/righteous-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/righteous-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/righteous-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/righteous-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/righteous-v8-latin-regular.svg#Righteous') format('svg'); /* Legacy iOS */
  }

  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../static/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
        url('../static/fonts/roboto-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/roboto-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/roboto-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('../static/fonts/roboto-v20-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Roboto Light'), local('Roboto-Light'),
        url('../static/fonts/roboto-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/roboto-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/roboto-v20-latin-300.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/roboto-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/roboto-v20-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
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
