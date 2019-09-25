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
    span {
      font-family: ${props => props.theme.rightFont};
      color: ${props => props.theme.blue};
    }
    a {
      color: ${props => props.theme.blue};
    }
  }
`;

export default CartStyles;
