import { Button } from '@chakra-ui/react';
import React from 'react';

// import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  // const { login } = useAuth();

  return (
    <Button
      bgColor="white"
      color="teal.500"
      // onClick={login}
    >
      ログアウト
    </Button>
  );
};

export default LogoutButton;
