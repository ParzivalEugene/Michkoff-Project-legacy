import styled from 'styled-components';
import colors from '../styles/colors';

const NavContainer = styled.nav`
  width: auto;
  height: 6rem;
  border-bottom: 1px solid ${colors.text_main};
  background: rgba(78, 67, 141, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.main_3};
  position: sticky;
  top: 0;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 32rem;

    li {
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
`

const Button = styled.div`
  background: ${colors.text_main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 12px;

  p {
    color: ${colors.background};
    font-size: 1rem;
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <h1>Michkoff</h1>
        <ul>
          <li>Projects</li>
          <li>Codewars</li>
          <li>Kaggle</li>
          <li>Links</li>
        </ul>
        <Button><p>Sign in</p></Button>
      </Nav>
    </NavContainer>
  )
}

export default Navbar