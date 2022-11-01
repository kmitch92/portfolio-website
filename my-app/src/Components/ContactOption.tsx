import { Card, Button } from 'react-bootstrap';
import { FC } from 'react';
import { BsWhatsapp, BsMessenger, BsEnvelopeFill } from 'react-icons/bs';

export interface Props {
  option: {
    icon: string;
    name: string;
    contact: string;
    link: string;
  };
}

export const ContactOption: FC<Props> = ({ option }) => {
  return (
    <Card
      style={{
        margin: '2%',
        textAlign: 'center',
        borderRadius: '6px',
      }}
      className="bg-white text-darker-tg shadow-sm"
      key={option.name}
    >
      <Card.Header className="text-lighter-tg bg-darker-tg">
        {option.icon === 'email' && (
          <BsEnvelopeFill style={{ fontSize: '1.4rem', margin: '0.6rem' }} />
        )}
        {option.icon === 'messenger' && (
          <BsMessenger style={{ fontSize: '1.4rem', margin: '0.6rem' }} />
        )}
        {option.icon === 'whatsapp' && (
          <BsWhatsapp style={{ fontSize: '1.4rem', margin: '0.6rem' }} />
        )}
        <h5 style={{ whiteSpace: 'nowrap' }}>{option.name}</h5>
      </Card.Header>
      <Card.Body>
        <Card.Text className="h6" style={{ whiteSpace: 'nowrap' }}>
          {option.contact}
        </Card.Text>
      </Card.Body>
      <Button
        href={option.link}
        className="shadow-sm"
        variant="outline-darker-tg"
        style={{ alignSelf: 'center', marginBottom: '0.6rem' }}
      >
        Contact
      </Button>
    </Card>
  );
};
