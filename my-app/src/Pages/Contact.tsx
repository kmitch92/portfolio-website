import { Card, Container, Form, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { ContactOption, Props } from '../Components/ContactOption';
import { useRef, MutableRefObject, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedPage from '../Components/AnimatedPage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const popover = (
  <Popover id="popover-basic" className="shadow">
    <Popover.Header
      className="text-darker-tg"
      style={{ paddingTop: '1.4rem', border: 'none' }}
    >
      <h6>Thanks for reaching out.</h6>
      <h6> I'll get right back to you!</h6>
    </Popover.Header>
  </Popover>
);

export const Contact = () => {
  const form: MutableRefObject<any> = useRef();
  const [showSubmit, toggleShowSubmit] = useState(true);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bf14raj',
        'template_ht1x4en',
        form.current,
        'ufOr0j4EXDL1S9kQ2'
      )
      .then(
        (result) => {
          toggleShowSubmit(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const opt1: Props['option'] = {
    icon: 'email',
    name: 'Email',
    contact: 'kielmitchell8@gmail.com',
    link: 'mailto:kielmitchell8@gmail.com',
  };
  const opt2: Props['option'] = {
    icon: 'messenger',
    name: 'Messenger',
    contact: 'Kiel Mitchell',
    link: 'https://m.me/kiel.mitchell.7',
  };
  const opt3: Props['option'] = {
    icon: 'whatsapp',
    name: 'WhatsApp',
    contact: '+447950 667413',
    link: 'https://api.whatsapp.com/send?phone=447950667413',
  };

  const contOpts = [opt1, opt2, opt3];

  return (
    <AnimatedPage>
      <Container fluid="md" style={{ marginBottom: '20px' }}>
        <Row>
          <Col></Col>
          <Col md={8}>
            <Card
              style={{ padding: '10px', border: 'none', marginTop: '20px' }}
              className="shadow-sm bg-lighter-tg"
            >
              <Card.Header
                className="bg-lighter-tg text-darker-tg"
                style={{ border: 'none' }}
                as="h1"
              >
                Please, get in touch!
              </Card.Header>
              <Card.Text style={{ padding: '1%' }}>
                <h5>
                  Thank you for taking the time to look at my work. If you have
                  any questions, would like to contact me with an employment
                  opportunity, or just fancy a chat, please use one of the
                  contact options below to reach me. Thanks!
                </h5>
              </Card.Text>

              <Card
                style={{ padding: '25px', border: 'none', marginTop: '10px' }}
                className="shadow-sm"
              >
                <h1 className="text-darker-tg">Contact Me</h1>
                <Form
                  style={{ marginTop: '2rem' }}
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                      type="text"
                      name="name"
                      className="shadow-sm"
                      style={{ border: 'none' }}
                      placeholder="Your Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      className="shadow-sm"
                      style={{ border: 'none' }}
                      placeholder="Your Email Address"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTopic">
                    <Form.Control
                      type="text"
                      name="topic"
                      className="shadow-sm"
                      style={{ border: 'none' }}
                      placeholder="Topic"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="message"
                      className="shadow-sm"
                      style={{ border: 'none' }}
                      placeholder="Message"
                    />
                  </Form.Group>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popover}
                  >
                    {showSubmit ? (
                      <Button
                        variant="darker-tg"
                        style={{
                          marginTop: '20px',
                          border: 'none',
                          borderRadius: '9px',
                          marginLeft: '50%',
                          transform: 'translateX(-50%)',
                          padding: '0.6rem',
                          fontSize: '1.2rem',
                          width: '8rem',
                          fontWeight: '500',
                        }}
                        className="shadow-sm "
                        type="submit"
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="darker-tg"
                        style={{
                          marginTop: '20px',
                          border: 'none',
                          borderRadius: '9px',
                          marginLeft: '50%',
                          transform: 'translateX(-50%)',
                          padding: '0.6rem',
                          fontSize: '1.2rem',
                          width: '8rem',
                          fontWeight: '500',
                        }}
                        className="shadow-sm"
                        disabled
                      >
                        Submit
                      </Button>
                    )}
                  </OverlayTrigger>
                </Form>
              </Card>

              <Container
                fluid="sm"
                style={{
                  justifyContent: 'space-between',
                  marginTop: '1rem',
                  padding: '1rem',
                }}
              >
                <Row>
                  {contOpts.map((option) => (
                    <Col>
                      <ContactOption option={option} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </AnimatedPage>
  );
};
