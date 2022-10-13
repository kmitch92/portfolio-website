import { Container, Nav, Navbar as NavBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavBS sticky="top" variant="dark" className="bg-darker-tg shadow-sm mb-3">
      <Container className="text-white">
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/portfolio" as={NavLink}>
            Portfolio
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </NavBS>
  );
};
