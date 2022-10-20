import { Container, Card, Button, Accordion, Badge } from 'react-bootstrap';
import { PDFmodal } from '../Components/PDFmodal';
import { useState } from 'react';

export const Home = () => {
  const [PDFmodalShow, setPDFmodalShow] = useState(false);

  const onDownloadClick = () => {
    let alink = document.createElement('a');
    alink.href = 'Kiel_CV.pdf';
    alink.setAttribute('download', 'Kiel_CV.pdf');
    document.body.appendChild(alink);
    alink.click();
  };

  const handleClose = () => setPDFmodalShow(false);
  const handleShow = () => setPDFmodalShow(true);

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '70px',
      }}
    >
      <Card
        style={{ width: '55vw', padding: '30px', border: 'none' }}
        className="shadow-sm bg-lighter-tg"
      >
        <Card
          style={{ width: '35vw', alignSelf: 'center', border: 'none' }}
          className="shadow"
        >
          <Card.Header
            className="bg-white text-darker-tg"
            style={{ textAlign: 'center' }}
            as="h1"
          >
            Kiel Mitchell
          </Card.Header>
          <Card.Img
            variant="middle"
            src="https://images-cdn.9gag.com/photo/aN1zy3w_700b.jpg"
          />{' '}
          <Card.Body
            className="bg-white text-darker-tg"
            style={{ borderRadius: '8px' }}
          >
            <Card.Title>Full-Stack Junior Developer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <PDFmodal PDFmodalShow={PDFmodalShow} handleClose={handleClose} />
              <h4
                className="text-darker-tg"
                style={{ paddingTop: '4px', paddingRight: '0.5vw' }}
              >
                Curriculum Vitae
              </h4>
              <Button
                variant="outline-darker-tg"
                className="shadow-sm text-darker-tg"
                style={{
                  borderRadius: '9px',
                  width: '10vw',
                  marginRight: '0.5vw',
                }}
                onClick={handleShow}
              >
                View
              </Button>
              <Button
                variant="darker-tg"
                className="shadow-sm text-white"
                style={{ borderRadius: '9px', width: '10vw' }}
                onClick={onDownloadClick}
              >
                Download
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Accordion
          defaultActiveKey={['0']}
          alwaysOpen
          className="accordion-active"
          style={{ alignSelf: 'center' }}
        >
          <Card
            className="bg-white shadow"
            style={{
              marginTop: '40px',
              borderRadius: '9px',
              padding: '10px',
              width: '45vw',
            }}
          >
            <h2 style={{ marginLeft: '5px' }} className="text-darker-tg">
              Technologies
            </h2>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Languages</Accordion.Header>
              <Accordion.Body>
                <Badge pill bg="warning" text="dark">
                  JavaScript
                </Badge>
                {'  '}
                <Badge pill bg="teal-grey">
                  Java
                </Badge>
                {'  '}
                <Badge pill bg="primary">
                  Python
                </Badge>
                {'  '}
                <Badge pill bg="success">
                  SQL
                </Badge>{' '}
                <Badge pill bg="danger">
                  C
                </Badge>{' '}
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Front-End</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Back-End</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        </Accordion>
      </Card>
    </Container>
  );
};
