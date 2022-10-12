import { Card, Container, Form, Button } from 'react-bootstrap';

export const Contact = () => {
  return (
    <Container>
      <Card
        style={{ padding: '25px', border: 'none', marginTop: '30px' }}
        className="shadow-sm bg-lighter-tg"
      >
        <Card
          style={{ padding: '25px', border: 'none', marginTop: '30px' }}
          className="shadow-sm"
        >
          <h1 className="text-darker-tg">Contact Me</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="shadow-sm"
                style={{ border: 'none' }}
                placeholder="Your Email Address"
              />
              {/* <Form.Text className="text-muted ">
                This remains between you and me.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTopic">
              <Form.Control
                type="text"
                className="shadow-sm"
                style={{ border: 'none' }}
                placeholder="Topic"
              />
              {/* <Form.Text className="text-muted">
                Let me know what you want to talk about.
              </Form.Text> */}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                className="shadow-sm"
                style={{ border: 'none' }}
                placeholder="Message"
              />
              {/* <Form.Text className="text-muted">
                Let's get down to business.
              </Form.Text> */}
            </Form.Group>
            <Button
              variant="darker-tg"
              style={{ marginTop: '20px', border: 'none', borderRadius: '9px' }}
              className="shadow-sm"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Card>
    </Container>
  );
};
