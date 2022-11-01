import { Container, Nav, Navbar as NavBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavBS
      sticky="top"
      variant="dark"
      className="bg-darker-tg shadow-sm mb-3"
      style={{ height: '6vh' }}
    >
      <Container className="text-white">
        <Nav className="me-auto h4 ">
          <Nav.Link to="/" style={{ marginRight: '1vw' }} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/portfolio" style={{ marginRight: '1vw' }} as={NavLink}>
            Portfolio
          </Nav.Link>
          <Nav.Link to="/contact" style={{}} as={NavLink}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </NavBS>
  );
};
