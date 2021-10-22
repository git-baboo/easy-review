import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const quoteTheme = ({ children }: Props) => {
  return (
    <Box pl={3} borderLeft="4px" borderColor="gray.300">
      {children}
    </Box>
  );
};

export default quoteTheme;
