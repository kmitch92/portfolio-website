import { Container, Card, Button } from 'react-bootstrap';
import Projects from '../Assets/projects.json';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import AnimatedPage from '../Components/AnimatedPage';
import { TechPill } from '../Components/TechPill';

export const Portfolio = () => {
  return (
    <AnimatedPage>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        <Card
          style={{ width: '45vw', padding: '20px', border: 'none' }}
          className="shadow-sm bg-lighter-tg"
        >
          {Projects &&
            Projects.Projects.map((project) => {
              return (
                <Card
                  style={{
                    width: '42vw',
                    marginBottom: '30px',
                    border: 'none',
                  }}
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
                  <Card.Body>
                    {' '}
                    {project.Tags.split(' ').map((tag) => (
                      <span style={{ marginRight: '0.4rem' }}>
                        <TechPill tech={tag} />
                      </span>
                    ))}
                  </Card.Body>

                  <Card.Body>
                    <Button
                      variant="darker-tg"
                      style={{ marginRight: '10px', borderRadius: '9px' }}
                      href={project.Link}
                    >
                      <BsLink45Deg style={{ fontSize: '1.4rem' }} /> Hosted
                    </Button>
                    <Button
                      variant="darker-tg"
                      href={project.GitHub}
                      style={{ borderRadius: '9px' }}
                    >
                      <BsGithub style={{ fontSize: '1.4rem' }} /> Repositiory
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
        </Card>
      </Container>
    </AnimatedPage>
  );
};
