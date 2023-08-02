import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Yeah</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default NavBar;
