import { Text, Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  title: string;
  tmp: string;
};

const Template = ({ title, tmp }: Props) => {
  return (
    <Box width={235}>
      <Text color="black" fontSize="lg" fontWeight="semibold">
        {title}
      </Text>
      <Text color="black" fontSize="xs" fontWeight="medium">
        {tmp}
      </Text>
    </Box>
  );
};

export default Template;
