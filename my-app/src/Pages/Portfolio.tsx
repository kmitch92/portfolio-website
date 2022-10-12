import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import Projects from '../Assets/projects.json';

export const Portfolio = () => {
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
        style={{ width: '55rem', padding: '20px', border: 'none' }}
        className="shadow-sm bg-lighter-tg"
      >
        {Projects &&
          Projects.Projects.map((project) => {
            return (
              <Card
                style={{ width: '50rem', marginBottom: '50px', border: 'none' }}
                className="shadow-sm"
              >
                <Card.Header
                  className="bg-white text-darker-tg"
                  style={{ border: 'none' }}
                >
                  <h3>{project.Title}</h3>
                </Card.Header>
                <Card.Img variant="middle" src={project.Images[0]} />
                <Card.Body>
                  <Card.Text>{project.Description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  {project.Tags.split(' ').map((tag) => (
                    <ListGroup.Item>{tag}</ListGroup.Item>
                  ))}
                </ListGroup>
                <Card.Body>
                  <Button
                    variant="darker-tg"
                    style={{ marginRight: '40px', borderRadius: '9px' }}
                    href={project.Link}
                  >
                    Hosted Link
                  </Button>
                  <Button
                    variant="darker-tg"
                    href={project.GitHub}
                    style={{ borderRadius: '9px' }}
                  >
                    Repository
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </Card>
    </Container>
  );
};
