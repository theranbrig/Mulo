import PropTypes from 'prop-types';
import FooterStyles from './styles/FooterStyles';
import Link from './Link';

const Footer = ({ darkMode }) => (
  <FooterStyles>
    <div className="footer-left">
      <img src="../static/Default Photoshop Size.png" alt="MULO LOGO" />
      <div className="footer-nav-links">
        <Link activeClassName="active" href="/">
          <a>Home</a>
        </Link>
        <Link activeClassName="active" href="/products">
          <a>Browse</a>
        </Link>
        <Link activeClassName="active" href="/cart">
          <a>Cart</a>
        </Link>
      </div>
    </div>
    <div className="footer-right">
      <p>
        They loved it. You'll Love It.
      </p>
      <p>Thanks for visiting the bottom of the page.</p>
    </div>
  </FooterStyles>
);

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Footer;
