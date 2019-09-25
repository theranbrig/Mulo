import styled from 'styled-components';

const ItemPageStyles = styled.div`
  background-color: ${props => props.theme.black};
  display: grid;
  grid-template-rows: 1fr 8fr;
  grid-template-columns: 1fr;
  padding: 30px 0 0;
  min-height: 90vh;
  color: ${props => props.theme.white};
  padding-bottom: 50px;
  font-family: ${props => props.theme.raleFont};
  .spinner {
    margin-left: calc(50% - 100px);
  }
  h1 {
    text-align: center;
    margin-bottom: 5px;
    font-family: ${props => props.theme.rightFont};
    color: ${props => props.theme.blue};
    padding: 10px 0;
    font-size: 3rem;
  }
  .loading-page {
    h1 {
      color: ${props => props.theme.white};
      span {
        color: ${props => props.theme.blue};
      }
    }
  }
  .item-information {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
    justify-content: center;
    margin: 0 15%;
  }
  .right-content h3 {
    letter-spacing: 0.15rem;
  }
  .buttons button {
    display: block;
    border: none;
    padding: 15px;
    width: 50%;
    margin: 20px 0;
    font-size: 1.5rem;
    font-family: ${props => props.theme.rightFont};
    border: 3px solid ${props => props.theme.blue};
    &:hover {
      border: 3px solid ${props => props.theme.white};
    }
  }
  .add-button {
    color: ${props => props.theme.black};
    background: ${props => props.theme.blue};
  }
  .offer-button {
    color: ${props => props.theme.blue};
    background: ${props => props.theme.black};
    border: 3px solid ${props => props.theme.white};
  }
  h3.cart-error {
    padding: 10px;
    color: ${props => props.theme.blue};
    border: 3px solid ${props => props.theme.blue};
    width: 75%;
    margin: 10px 0;
  }
  img {
    transition: transform 0.5s;
    width: 300px;
    margin-left: calc(50% - 150px);
    border: 3px solid ${props => props.theme.white};
    &:hover {
      transform: scale(1.2);
    }
  }
  .original-price {
    span {
      text-decoration: line-through;
      color: #949494;
      font-size: 1.7rem;
    }
  }
  .discounted-price {
    span {
      color: ${props => props.theme.blue};
      font-size: 1.7rem;
    }
  }
  .rating span {
    color: ${props => props.theme.blue};
    font-size: 1.7rem;
  }
  .defects {
    margin-top: 25px;
  }
  .left-content {
    h3 {
      text-align: center;
      margin-top: 30px;
      span {
        color: ${props => props.theme.blue};
        font-family: ${props => props.theme.rightFont};
      }
    }
  }
  p,
  li {
    font-family: ${props => props.theme.raleFont};
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.05rem;
    font-weight: 300;
  }
  li span {
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.rightFont};
  }
  .more-information h3 span {
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.rightFont};
  }
`;

export default ItemPageStyles;
