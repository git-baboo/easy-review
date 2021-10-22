import { Text, Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  title: string;
  description: string;
};

const Template = ({ title, description }: Props) => {
  return (
    <Box width={190}>
      <Text color="black" fontSize="lg" fontWeight="semibold">
        {title}
      </Text>
      <Text color="black" fontSize="xs" fontWeight="medium" whiteSpace="pre-line">
        {description}
      </Text>
    </Box>
  );
};

export default Template;
