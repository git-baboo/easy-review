import { Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  level: number;
  children: ReactNode;
};

const headingTheme = ({ level, children }: Props) => {
  switch (level) {
    case 1:
      return (
        <Heading as="h1" my={4} pb={2} size="xl" borderBottom="1px" borderColor="gray.300">
          {children}
        </Heading>
      );
    case 2:
      return (
        <Heading as="h2" my={4} pb={2} size="lg" borderBottom="1px" borderColor="gray.300">
          {children}
        </Heading>
      );
    case 3:
      return (
        <Heading as="h3" my={4} size="md">
          {children}
        </Heading>
      );
    case 4:
      return (
        <Heading as="h4" my={4} size="sm">
          {children}
        </Heading>
      );
    case 5:
      return (
        <Heading as="h5" my={4} size="xs">
          {children}
        </Heading>
      );
    case 6:
      return (
        <Heading as="h6" my={4} size="xs" color="gray.500">
          {children}
        </Heading>
      );
  }
};

export default headingTheme;
