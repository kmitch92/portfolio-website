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
      {Projects &&
        Projects.Projects.map((project) => {
          return (
            <Card style={{ width: '50rem', marginBottom: '50px' }}>
              <Card.Header className="bg-success text-white">
                <h3>{project.Title}</h3>
              </Card.Header>
              <Card.Img variant="top" src={project.Images[0]} />
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
                  variant="outline-success"
                  style={{ marginRight: '40px' }}
                  href={project.Link}
                >
                  Hosted Link
                </Button>
                <Button variant="outline-success" href={project.GitHub}>
                  Repository
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </Container>
  );
};
