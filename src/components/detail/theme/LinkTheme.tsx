import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

const LinkTheme = ({ href, children }: Props) => {
  return (
    <Link color="blue.500" href={href}>
      {children}
    </Link>
  );
};

export default LinkTheme;
