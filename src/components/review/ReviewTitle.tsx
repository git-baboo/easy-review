import { Text } from '@chakra-ui/layout';
import React from 'react';

type Props = {
  color: string;
  fontSize: string;
  title: string;
};

const ReviewTitle = ({ color, fontSize, title }: Props) => {
  return (
    <Text color={color} fontSize={fontSize}>
      {title}
    </Text>
  );
};

export default ReviewTitle;
