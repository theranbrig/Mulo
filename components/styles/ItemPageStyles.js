import styled from 'styled-components';

const ItemPageStyles = styled.div`
  background-color: ${props => props.theme.black};
  display: grid;
  grid-template-rows: 1fr 6fr;
  grid-template-columns: 1fr;
  padding: 30px 0 0;
  min-height: 90vh;
  color: ${props => props.theme.white};
  .spinner {
    margin-left: calc(50% - 100px);
  }
  h1 {
    text-align: center;
    margin-bottom: 30px;
    font-family: ${props => props.theme.rightFont};
    color: ${props => props.theme.blue};
    padding: 10px 0;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .item-information {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
    justify-content: center;
    margin: 0 15%;
  }
  .buttons button {
    display: block;
    border: none;
    padding: 15px;
    width: 50%;
    margin: 20px 0;
  }
  img {
    width: 300px;
    margin-left: calc(50% - 150px);
    &:hover {
      transform: scale(1.2);
    }
  }
  .original-price {
    span {
      text-decoration: line-through;
    }
  }
  .discounted-price {
    span {
      color: ${props => props.theme.blue};
    }
  }
  .left-content {
    h3 {
      text-align: center;
      margin-top: 30px;
    }
  }
`;

export default ItemPageStyles;
