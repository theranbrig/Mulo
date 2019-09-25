import PropTypes from 'prop-types';
import FooterStyles from './styles/FooterStyles';
import Link from './Link';

const Footer = ({ darkMode }) => (
  <FooterStyles>
    <div className='footer-left'>
      <div className='title'>
        <h1>MULO</h1>
        <h3>BY 101 GLOBAL</h3>
      </div>
   
    </div>
    <div className='social'>
      <h3>Join us on your favorite social media.</h3>
      <div className='social-links'>
        <img src='https://icon-library.net/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg' />
        <img src='https://www.pinclipart.com/picdir/big/136-1369419_free-white-facebook-icon-facebook-twitter-icons-white.png' />
        <img src='https://gramasia.com/sns/kakao_icon.png' />
      </div>
    </div>
    <div className='footer-right'>
      <p>POWERED BY</p>
      <img
        src='https://res.cloudinary.com/dq7uyauun/image/upload/v1569434025/img_logo_footer.png'
        alt='hanwha logo'
      />
    </div>
  </FooterStyles>
);

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Footer;
