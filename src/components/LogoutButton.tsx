import { Button } from '@chakra-ui/react';
import React from 'react';

import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <Button bgColor="white" color="teal.500" onClick={logout}>
      ログアウト
    </Button>
  );
};

export default LogoutButton;
