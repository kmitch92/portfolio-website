import { Container, Card, Button } from 'react-bootstrap';
import Projects from '../Assets/projects.json';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import AnimatedPage from '../Components/AnimatedPage';
import { TechPill } from '../Components/TechPill';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Portfolio = () => {
  return (
    <AnimatedPage>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <Row>
          <Col></Col>
          <Col md={7}>
            <Container
              fluid="md"
              style={{ borderRadius: '6px', padding: '10px', border: 'none' }}
              className="shadow-sm bg-lighter-tg"
            >
              <Card.Header
                className="h1 bg-lighter-tg text-darker-tg"
                style={{ border: 'none' }}
              >
                Featured Projects
              </Card.Header>
              {Projects &&
                Projects.Projects.map((project) => {
                  return (
                    <Card
                      style={{
                        marginTop: '20px',
                        border: 'none',
                      }}
                      className="shadow-sm"
                    >
                      <Card.Header
                        className="bg-darker-tg text-white"
                        style={{ border: 'none' }}
                      >
                        <h3>{project.Title}</h3>
                      </Card.Header>
                      <Card.Img
                        variant="middle"
                        src={project.Images[0]}
                        style={{
                          width: '100.01%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                        }}
                      />
                      <Card.Body>
                        <Card.Text>{project.Description}</Card.Text>
                      </Card.Body>
                      <Card.Body>
                        {project.Tags.split(' ').map((tag) => (
                          <span style={{ marginRight: '0.4rem' }}>
                            <TechPill tech={tag} />
                          </span>
                        ))}
                      </Card.Body>

                      <Card.Body>
                        {project.Link !== '' && (
                          <Button
                            variant="darker-tg"
                            style={{
                              marginRight: '10px',
                              marginBottom: '10px',
                              borderRadius: '9px',
                            }}
                            href={project.Link}
                          >
                            <BsLink45Deg style={{ fontSize: '1.4rem' }} />{' '}
                            Hosted
                          </Button>
                        )}
                        <Button
                          variant="darker-tg"
                          href={project.GitHub}
                          style={{ borderRadius: '9px', marginBottom: '10px' }}
                        >
                          <BsGithub style={{ fontSize: '1.4rem' }} />{' '}
                          Repositiory
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </AnimatedPage>
  );
};
