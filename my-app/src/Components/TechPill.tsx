import { Badge } from 'react-bootstrap';
import { FC } from 'react';

interface TechPillProps {
  tech: string;
}

export const TechPill: FC<TechPillProps> = (
  props: TechPillProps
): JSX.Element => {
  if (props.tech) {
    switch (props.tech) {
      case 'JavaScript':
        return (
          <Badge pill bg="warning" text="dark">
            JavaScript
          </Badge>
        );
        break;

      case 'React':
        return (
          <Badge pill bg="react" text="dark">
            React
          </Badge>
        );
        break;

      case 'CSS':
        return (
          <Badge pill bg="html">
            HTML & CSS
          </Badge>
        );
        break;

      case 'React-Native':
        return (
          <Badge pill bg="react" text="dark">
            React Native
          </Badge>
        );
        break;

      case 'Tailwind':
        return (
          <Badge pill bg="tailwind">
            Tailwind
          </Badge>
        );
        break;

      case 'Node':
        return (
          <Badge pill bg="success">
            Node
          </Badge>
        );
        break;

      case 'Express':
        return (
          <Badge pill bg="lighter-tg" text="dark">
            Express
          </Badge>
        );
        break;

      case 'TypeScript':
        return (
          <Badge pill bg="typescript">
            TypeScript
          </Badge>
        );
        break;

      case 'Bootstrap':
        return (
          <Badge pill bg="bootstrap">
            Bootstrap
          </Badge>
        );
        break;

      case 'Sass':
        return (
          <Badge pill bg="sass">
            Sass
          </Badge>
        );
        break;

      case 'PostgreSQL':
        return (
          <Badge pill bg="teal-grey">
            PostgreSQL
          </Badge>
        );
        break;

      case 'Jest':
        return (
          <Badge pill bg="jest">
            Jest
          </Badge>
        );
        break;

      default:
        return <p>{props.tech}</p>;
        break;
    }
  } else return <></>;
};
