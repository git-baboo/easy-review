import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

const linkTheme = ({ href, children }: Props) => {
  return (
    <Link color="blue.500" href={href}>
      {children}
    </Link>
  );
};

export default linkTheme;
