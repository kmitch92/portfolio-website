import { Container, Card, ListGroup } from 'react-bootstrap';
import Projects from '../projects.json';

export const Portfolio = () => {
  return (
    <Container>
      <h1>Portfolio Page</h1>
      {Projects &&
        Projects.Projects.map((project) => {
          return (
            <Card style={{ width: '50rem', marginBottom: '50px' }}>
              <Card.Img variant="top" src={project.Images[0]} />
              <Card.Body>
                <Card.Title>{project.Title}</Card.Title>
                <Card.Text>{project.Description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {project.Tags.split(' ').map((tag) => (
                  <ListGroup.Item>{tag}</ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Body>
                <Card.Link href={project.Link}>Hosted Link</Card.Link>
                <Card.Link href={project.GitHub}>Repository</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
    </Container>
  );
};
