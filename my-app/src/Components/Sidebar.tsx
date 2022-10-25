import { Offcanvas, Button, OffcanvasProps, Card } from 'react-bootstrap';
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
        style={{
          height: '14rem',
          width: '2.6rem',
          borderRadius: '20px 0px 0px 20px',
        }}
      >
        <h3
          style={{
            transform: 'rotate(-90deg)',
            letterSpacing: '.6rem',
            textAlign: 'center',
            marginTop: '6.7rem',
          }}
        >
          LINKS
        </h3>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={props.placement}
        className="bg-darker-tg text-light"
        style={{}}
      >
        <Offcanvas.Header className="bg-light text-darker-tg" closeButton>
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
