import { Container, Card, Button, Accordion, Badge } from 'react-bootstrap';

export const Home = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
      }}
    >
      <Card
        style={{ width: '45vw', padding: '20px', border: 'none' }}
        className="shadow-sm bg-lighter-tg"
      >
        <Card
          style={{ width: '25vw', alignSelf: 'center', border: 'none' }}
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
          />
          <Card.Body className="bg-white text-darker-tg">
            <Card.Title>Full-Stack Junior Developer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="darker-tg"
              className="shadow-sm text-white"
              style={{ borderRadius: '9px' }}
            >
              Curriculum Vitae
            </Button>
          </Card.Body>
        </Card>

        <Accordion
          defaultActiveKey={['0']}
          alwaysOpen
          className="accordion-active"
        >
          <Container
            className="bg-white shadow"
            style={{
              marginTop: '20px',
              borderRadius: '9px',
              padding: '10px',
              width: '40vw',
            }}
          >
            <h1 className="text-darker-tg">Technologies</h1>
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
          </Container>
        </Accordion>
      </Card>
    </Container>
  );
};
