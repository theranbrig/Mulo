import styled from 'styled-components';

const HomePageStyles = styled.div`
  background: ${props => props.theme.black};
  .main-content {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    height: 600px;
    border-bottom: 2px solid ${props => props.theme.blue};
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    img.title-image {
      width: 25%;
    }
    a {
      color: ${props => props.theme.blue};
    }
    .side-pictures {
      background: linear-gradient(#ffffff67, #ffffff32),
        url('https://images.unsplash.com/photo-1503160814947-656030efef06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
      background-size: cover;
      margin: 0;
      width: 100%;
      height: 600px;
      border-right: 2px solid ${props => props.theme.blue};
      img {
        height: 100%;
        width: 100%;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    .title-box {
      text-align: center;
      background: linear-gradient(#ffffff67, #ffffff32),
        url('https://images.unsplash.com/photo-1541327883457-a5c8214cc9fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1614&q=80');
      background-size: cover;
      height: 600px;
      img {
        margin-top: 5%;
      }
      h2 {
        text-align: center;
        font-family: ${props => props.theme.raleFont};
        margin-top: 25%;
        color: ${props => props.theme.black};
        text-shadow: 1px 2px 2px #ffffff67, 3px 3px 3px #ffffff45;
      }
      button {
        padding: 12px;
        border: none;
        font-size: 20px;
        font-family: ${props => props.theme.rightFont};
        background: ${props => props.theme.blue};
        letter-spacing: 0.1rem;
        a {
          color: ${props => props.theme.white};
        }
      }
    }
  }
  .divider {
    p {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.raleFont};
      font-size: 24px;
      text-align: center;
      padding: 10px;
      border-top: 2px solid ${props => props.theme.blue};
      border-bottom: 2px solid ${props => props.theme.blue};
    }
  }
  .about-layout {
    display: grid;
    max-width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${props => props.theme.white};
    img {
      max-width: 60%;
      margin-left: 20%;
      margin-top: 10%;
    }
    h3 {
      text-align: center;
      color: ${props => props.theme.blue};
      font-family: ${props => props.theme.rightFont};
      font-size: 24px;
      letter-spacing: 0.15rem;
    }
    p {
      font-family: ${props => props.theme.raleFont};
      padding: 20px;
    }
  }

  .active-link {
    color: ${props => props.theme.white};
  }
`;

export default HomePageStyles;
