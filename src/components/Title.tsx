import { Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  size: number;
  mt: number;
  text: string;
};

const Title = ({ size, mt, text }: Props) => {
  return (
    <Text
      fontSize={size}
      color="white"
      fontWeight={700}
      fontFamily="Inter"
      fontStyle="normal"
      mt={mt}
    >
      {text}
    </Text>
  );
};

export default Title;
