import { Container, Nav, Navbar as NavBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavBS sticky="top" className="bg-darker-tg shadow-sm mb-3">
      <Container className="text-white">
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <h4 className="text-lighter-tg">Home</h4>
          </Nav.Link>
          <Nav.Link to="/portfolio" as={NavLink}>
            <h4 className="text-lighter-tg">Portfolio</h4>
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            <h4 className="text-lighter-tg">Contact</h4>
          </Nav.Link>
        </Nav>
      </Container>
    </NavBS>
  );
};
