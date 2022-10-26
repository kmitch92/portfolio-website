import { Container, Card, Button, Accordion, Badge } from 'react-bootstrap';
import { PDFmodal } from '../Components/PDFmodal';
import { useState } from 'react';
import { BsDownload, BsEyeFill } from 'react-icons/bs';
import AnimatedPage from '../Components/AnimatedPage';

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
    <AnimatedPage>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        <Card
          style={{ width: '50vw', padding: '30px', border: 'none' }}
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
              src="kiel1.png"
              style={{ filter: 'brightness(1.1) saturate(110%)' }}
            />{' '}
            <Card.Body
              className="bg-white text-darker-tg"
              style={{ borderRadius: '8px' }}
            >
              <Card.Title>Full-Stack Junior Developer</Card.Title>
              <Card.Text>
                I am a creative and analytical problem solver with a drive for
                mastery in the skills I pursue.
              </Card.Text>
              <Card.Text>
                Having recently completed the Northcoders Skills Bootcamp, I am
                now looking for roles where I will continue to learn and grow as
                a developer.
              </Card.Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <PDFmodal
                  PDFmodalShow={PDFmodalShow}
                  handleClose={handleClose}
                />
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
                    width: '12rem',
                    marginRight: '0.4rem',
                    padding: '0.5rem',
                  }}
                  onClick={handleShow}
                >
                  <BsEyeFill
                    style={{
                      fontSize: '1.4rem',
                      marginRight: '1rem',
                    }}
                  />
                  View
                </Button>
                <Button
                  variant="darker-tg"
                  className="shadow-sm text-white"
                  style={{
                    borderRadius: '9px',
                    width: '12rem',
                    padding: '0.5rem',
                  }}
                  onClick={onDownloadClick}
                >
                  <BsDownload
                    style={{
                      fontSize: '1.4rem',
                      marginRight: '1rem',
                    }}
                  />
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
              className="bg-darker-tg shadow"
              style={{
                marginTop: '40px',
                borderRadius: '9px',
                padding: '10px',
                width: '45vw',
              }}
            >
              <h2 style={{ marginLeft: '5px' }} className="text-white">
                Technologies
              </h2>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Languages</Accordion.Header>
                <Accordion.Body>
                  <Badge pill bg="warning" text="dark">
                    JavaScript
                  </Badge>
                  {'  '}
                  <Badge pill bg="typescript">
                    Java
                  </Badge>
                  {'  '}
                  <Badge pill bg="warning" text="primary">
                    Python
                  </Badge>
                  {'  '}
                  <Badge pill bg="success">
                    SQL
                  </Badge>{' '}
                  <Badge pill bg="secondary">
                    C
                  </Badge>{' '}
                  <br />
                  <br />
                  Most of the code that I have written has been in JavaScript,
                  though I have also written some Java and Python and have
                  touched upon C. I am familiar with SQL through using
                  PostgreSQL and SQLite.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Front-End</Accordion.Header>
                <Accordion.Body>
                  <Badge pill bg="react" text="dark">
                    React
                  </Badge>
                  {'  '}
                  <Badge pill bg="react" text="dark">
                    React Native
                  </Badge>
                  {'  '}
                  <Badge pill bg="html">
                    HTML & CSS
                  </Badge>
                  {'  '}
                  <Badge pill bg="typescript">
                    TypeScript
                  </Badge>{' '}
                  <Badge pill bg="sass">
                    Sass
                  </Badge>{' '}
                  <Badge pill bg="bootstrap">
                    Bootstrap
                  </Badge>{' '}
                  <Badge pill bg="tailwind">
                    Tailwind
                  </Badge>{' '}
                  <br />
                  <br />
                  I have used ReactJS in the majority of my front-end projects,
                  and have managed to gain a basic familiarity with a few of the
                  major styling libraries and frameworks.
                  <br />
                  <br />I had an introduction to mobile development through
                  React-Native while at Northcoders, and this website has been
                  my first foray into using TypeScript.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Back-End</Accordion.Header>
                <Accordion.Body>
                  <Badge pill bg="success">
                    Node
                  </Badge>
                  {'  '}
                  <Badge pill bg="teal-grey">
                    PostgreSQL
                  </Badge>
                  {'  '}
                  <Badge pill bg="typescript">
                    SQLite
                  </Badge>
                  {'  '}
                  <Badge pill bg="lighter-tg" text="dark">
                    Express
                  </Badge>
                  {'  '}
                  <Badge pill bg="jest">
                    Jest
                  </Badge>
                  <br />
                  <br />
                  All of my back-end work so far has been with Node.JS /
                  Express, and a flavour of SQL to build RESTful APIs for
                  web-applications, although I've also used Python and SQLite to
                  build a minimal CLI DBMS.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </Card>
      </Container>
    </AnimatedPage>
  );
};
