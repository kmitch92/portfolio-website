import { Card, Container, Form, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { ContactOption, Props } from '../Components/ContactOption';
import { useRef, MutableRefObject, useState } from 'react';
import emailjs from '@emailjs/browser';

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
  console.log(form);

  const sendEmail = (e: any) => {
    e.preventDefault();
    toggleShowSubmit(false);

    const dataObj = {};

    emailjs
      .sendForm(
        'service_bf14raj',
        'template_ht1x4en',
        form.current,
        'ufOr0j4EXDL1S9kQ2'
      )
      .then(
        (result) => {
          console.log(result.text);
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
    contact: '07950 667413',
    link: 'https://api.whatsapp.com/send?phone=07950667413',
  };

  const contOpts = [opt1, opt2, opt3];

  return (
    <Container>
      <Card
        style={{ padding: '25px', border: 'none', marginTop: '60px' }}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h5>
        </Card.Text>
        <Card
          style={{ padding: '25px', border: 'none', marginTop: '30px' }}
          className="shadow-sm"
        >
          <h1 className="text-darker-tg">Contact Me</h1>
          <Form style={{ marginTop: '2rem' }} ref={form} onSubmit={sendEmail}>
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
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              {showSubmit ? (
                <Button
                  variant="darker-tg"
                  style={{
                    marginTop: '20px',
                    border: 'none',
                    borderRadius: '9px',
                  }}
                  className="shadow-sm"
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
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '1rem',
          }}
        >
          {contOpts.map((option) => (
            <ContactOption option={option} />
          ))}
        </Container>
      </Card>
    </Container>
  );
};
