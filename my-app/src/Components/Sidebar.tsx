import { Offcanvas, Button, OffcanvasProps } from 'react-bootstrap';
import { useState } from 'react';

export const Sidebar = (props: OffcanvasProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        position: 'fixed',
        display: 'block',
        right: '0%',
        bottom: '50%',
        height: '10vh',
      }}
    >
      <Button
        variant="darker-tg"
        onClick={handleShow}
        style={{ height: '15vh', width: '3vw' }}
      >
        <h4>L</h4>
        <h4>I</h4>
        <h4>N</h4>
        <h4>K</h4>
        <h4>S</h4>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={props.placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Links</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          GitHub : https://github.com/kmitch92?tab=repositories
        </Offcanvas.Body>
        Instagram : https://www.instagram.com/kielmitchell/
        <Offcanvas.Body></Offcanvas.Body>
        <Offcanvas.Body>
          LinkedIn: https://www.linkedin.com/in/kielmitchell/
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
