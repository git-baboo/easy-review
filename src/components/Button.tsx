import { Button } from '@chakra-ui/react';
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

type Props = {
  label: string;
};

const Buttons = ({ label }: Props) => {
  return (
    <Button leftIcon={<DiGithubBadge color="black" size="25" />} bgColor="white">
      {label}
    </Button>
  );
};

export default Buttons;
