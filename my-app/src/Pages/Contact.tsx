import { Container, Form, Button } from 'react-bootstrap';

export const Contact = () => {
  return (
    <Container>
      <h1>Contact Me</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTopic">
          <Form.Label>Topic</Form.Label>
          <Form.Control type="text" placeholder="Topic" />
          <Form.Text className="text-muted">
            Let me know what you want to talk about.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>

          <Form.Control type="text" placeholder="Message" />
          <Form.Text className="text-muted">
            Let's get down to business.
          </Form.Text>
        </Form.Group>
        <Button
          variant="outline-secondary"
          style={{ marginTop: '20px' }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
