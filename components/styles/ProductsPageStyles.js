import styled from 'styled-components';

const ProductsPageStyles = styled.div`
  text-align: center;
  background-color: ${props => props.theme.black};
  min-height: 90vh;

  .products-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 4%;
    padding: 3% 5%;
  }
  h1 {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.raleFont};
    font-weight: 300;
    padding: 20px;
    font-size: 2.5rem;
    span {
      color: ${props => props.theme.blue};
      font-family: ${props => props.theme.rightFont};
    }
  }
  h3 {
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.raleFont};
    font-size: 1.4rem;
    margin-bottom: 5px;
    margin-top: 3px;
  }
  p {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.raleFont};
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  .original-price {
    text-decoration: line-through;
    color: #939393;
  }
  img {
    height: 205px;
    width: 205px;
    border-radius: 50%;
  }
`;

export default ProductsPageStyles;
