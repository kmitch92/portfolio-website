import { Container, Card, Button, Accordion } from 'react-bootstrap';

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
      <Card style={{ width: '35vw' }} className="shadow-sm ">
        <Card.Header className="bg-success text-white" as="h1">
          Kiel Mitchell
        </Card.Header>
        <Card.Img
          variant="middle"
          src="https://images-cdn.9gag.com/photo/aN1zy3w_700b.jpg"
        />
        <Card.Body>
          <Card.Title>Full-Stack Junior Developer</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-success">Curriculum Vitae</Button>
        </Card.Body>
      </Card>
      <Container
        className="bg-success"
        style={{
          marginTop: '30px',
          borderRadius: '9px',
          width: '70vw',
          height: '30vh',
        }}
      >
        <h1 className="text-white">Technologies</h1>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Languages</Accordion.Header>
            <Accordion.Body>
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
        </Accordion>
      </Container>
    </Container>
  );
};
