import styled from 'styled-components';

const NavStyles = styled.div`
  .navigation {
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.darkBlack};
    padding: 10px;
    img {
      height: 40px;
      width: auto;
      margin: 10px;
    }
    border-bottom: 3px solid ${props => props.theme.blue};
  }
  .desktop-nav-links {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    grid-gap: 20px;
    height: 60px;
    @media (max-width: 900px) {
      display: none;
    }
    a {
      line-height: 40px;
      color: ${props => props.theme.blue};
      font-size: 1.5rem;
      font-family: ${props => props.theme.raleFont};
      border-bottom: transparent 1px solid;
      padding-bottom: 1px;
      text-decoration: none;
      &:hover {
        border-bottom: ${props => props.theme.white} 1px solid;
      }
    }
    .active {
      color: ${props => props.theme.white};
    }
  }
  div.main-logo img {
    font-family: ${props => props.theme.robFont};
    color: ${props => props.theme.white};
    height: 40px;
    padding: 0 0 0 20px;
  }
`;

export default NavStyles;
