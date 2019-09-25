import styled from 'styled-components';

const CartStyles = styled.div`
  background-color: ${props => props.theme.black};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
  min-height: 90vh;
  h1 {
    text-align: center;
    font-family: ${props => props.theme.raleFont};
    color: ${props => props.theme.white};
    font-weight: 300;
    font-size: 3rem;
    padding: 20px 0;
    span {
      font-family: ${props => props.theme.rightFont};
      color: ${props => props.theme.blue};
    }
    a {
      color: ${props => props.theme.blue};
    }
  }
  .cart-information {
    padding: 0 10%;
  }
  .cart-information li {
    display: grid;
    grid-template-columns: 1fr 9fr;
    border-top: 2px solid ${props => props.theme.blue};
    border-bottom: 2px solid ${props => props.theme.blue};
    padding: 10px 30px;
    margin: 5px 0;

    color: ${props => props.theme.white};
    h2,
    h3,
    h4 {
      font-family: ${props => props.theme.raleFont};
    }
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 2px solid ${props => props.theme.blue};
    }
    .information {
      display: grid;
      grid-template-columns: 2fr 3fr;
    }
    .price-button {
      justify-self: right;
      align-self: center;
      button {
        border: none;
        padding: 10px;
        font-family: ${props => props.theme.rightFont};
        color: ${props => props.theme.white};
        background: ${props => props.theme.blue};
        border: 2px solid transparent;
        font-size: 1.3rem;
        &:hover {
          border: 2px solid #438948;
        }
      }

      .original {
        color: #949494;

        span {
          text-decoration: line-through;
        }
      }
      h4.sale span {
        color: ${props => props.theme.blue};
        font-size: 1.5rem;
      }
    }
    .name-rating {
      align-self: center;
      padding-left: 20px;
      h2 {
        color: ${props => props.theme.blue};
      }
    }
  }
  ul {
    padding-left: 0;
    padding-bottom: 30px;
  }
  .purchase-info {
    text-align: center;
    color: ${props => props.theme.white};
    h2 {
      font-size: 2.5rem;
      font-family: ${props => props.theme.raleFont};
    }
    span {
      color: ${props => props.theme.blue};
    }
    button {
      border: none;
      font-family: ${props => props.theme.rightFont};
      font-size: 2rem;
      padding: 10px 20px;
      background: ${props => props.theme.blue};
      color: white;
      border: 2px solid transparent;
      &:hover {
        border: 2px solid #438948;
      }
    }
  }
`;

export default CartStyles;
