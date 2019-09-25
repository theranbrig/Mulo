import styled from 'styled-components';

const FooterStyles = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.blue};
  h1 {
    font-family: ${props => props.theme.rightFont};
    color: ${props => props.theme.black};
  }
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
  }
  img {
    height: 40px;
  }
  .footer-left {
    display: grid;
    grid-template-rows: 1fr 20px;
    grid-template-columns: 300px;
    grid-gap: 5px;
    margin: 10px;
    font-family: ${props => props.theme.rightFont};
    @media (max-width: 800px) {
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr;
      align-content: space-between;
      margin: 0;
    }
    .title {
      h1 {
        margin: 0;
        font-size: 3rem;
      }
      h3 {
        margin-top: 5px;
        color: ${props => props.theme.black};
      }
    }
    .footer-nav-links {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      a {
        color: ${props => props.theme.black};

        @media (max-width: 800px) {
          text-align: end;
        }
      }
    }
  }
  .footer-right {
    display: grid;
    grid-template-rows: 1fr 3fr;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    margin-top: 10px;

    p {
      margin: 0;
      color: ${props => props.theme.black};
      font-family: ${props => props.theme.rightFont};
      text-align: center;
    }
    img {
      width: 200px;
      align-self: top;
    }
    @media (max-width: 800px) {
      font-size: 0.8rem;
    }
  }
  .social {
    text-align: center;
    h3 {
      font-family: ${props => props.theme.rightFont};
      color: white;
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
    }
    img {
      margin: 3px;
    }
  }
`;

export default FooterStyles;
