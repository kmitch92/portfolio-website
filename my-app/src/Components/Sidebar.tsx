import { Offcanvas, Button, OffcanvasProps, Card } from 'react-bootstrap';
import { useState } from 'react';
import {
  BsGithub,
  BsLinkedin,
  BsPalette,
  BsFilm,
  BsInstagram,
  BsVimeo,
} from 'react-icons/bs';

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
            letterSpacing: '.5rem',
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
        className="bg-darker-tg "
        style={{}}
      >
        <Offcanvas.Header className="bg-light text-darker-tg" closeButton>
          <Offcanvas.Title>Links</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Card
            className="bg-lighter-tg text-darker-tg"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Card.Header>
              {' '}
              <BsGithub
                style={{
                  fontSize: '1.4rem',
                  marginRight: '0.4rem',
                }}
              />{' '}
              Github
            </Card.Header>
            <Card.Body>
              My GitHub profile holds the projects mentioned on the Portfolio
              page here, as well as any smaller or unfinished projects that I
              might still be working on.
            </Card.Body>
            <Card.Footer>
              <Button
                href="https://github.com/kmitch92"
                variant="darker-tg"
                size="lg"
              >
                <BsGithub style={{ marginRight: '0.7rem' }} />
                Go
              </Button>
            </Card.Footer>
          </Card>
          <Card
            className="bg-lighter-tg text-darker-tg"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Card.Header>
              {' '}
              <BsLinkedin
                style={{
                  fontSize: '1.4rem',
                  marginRight: '0.4rem',
                }}
              />{' '}
              LinkedIn
            </Card.Header>
            <Card.Body>
              I have worked as a laboratory manager and chemistry analyst for
              over a decade; a time where I also pursued oil -painting and ran a
              boutique production company business. I am now pursuing Software
              Developer roles, where I hope to find use for both my creative and
              analytical faculties.
            </Card.Body>
            <Card.Footer>
              {' '}
              <Button
                href="https://www.linkedin.com/in/kielmitchell/"
                variant="darker-tg"
                size="lg"
              >
                <BsLinkedin style={{ marginRight: '0.7rem' }} />
                Go
              </Button>
            </Card.Footer>
          </Card>
          <Card
            className="bg-lighter-tg text-darker-tg"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Card.Header>
              {' '}
              <BsPalette
                style={{
                  fontSize: '1.4rem',
                  marginRight: '0.4rem',
                }}
              />{' '}
              Painting
            </Card.Header>
            <Card.Body>
              My success as a painter shows my commitment to the pursuits that I
              engage in, the attention to detail that I apply to my projects,
              and the drive towards skill-mastery that animates my work.{' '}
            </Card.Body>
            <Card.Footer>
              {' '}
              <Button
                href="https://www.instagram.com/kielmitchell/"
                variant="darker-tg"
                size="lg"
              >
                <BsInstagram style={{ marginRight: '0.7rem' }} />
                Go
              </Button>
            </Card.Footer>
          </Card>
          <Card
            className="bg-lighter-tg text-darker-tg"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Card.Header>
              {' '}
              <BsFilm
                style={{
                  fontSize: '1.4rem',
                  marginRight: '0.4rem',
                }}
              />{' '}
              Film
            </Card.Header>
            <Card.Body>
              A friend and I started Mind Over Media Productions as film
              students. We were able to work on a number of projects to a high
              standard and learn the ropes of running a small business.
              Ultimately, opportunities lay elsewhere for us both, but this
              remains an invaluable experience.
            </Card.Body>
            <Card.Footer>
              {' '}
              <Button
                href="https://vimeo.com/mindovermediaproductions"
                variant="darker-tg"
                size="lg"
              >
                <BsVimeo style={{ marginRight: '0.7rem' }} />
                Go
              </Button>
            </Card.Footer>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
