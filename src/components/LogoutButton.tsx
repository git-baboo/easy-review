import { ArrowBackIcon, EmailIcon } from '@chakra-ui/icons';
import { Menu, MenuList, MenuItem, MenuButton, IconButton, Avatar } from '@chakra-ui/react';
import React from 'react';

import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<Avatar src="https://bit.ly/sage-adebayo" />}
        variant="ghost"
        _hover={{ bg: 'teal.500' }}
      />
      <MenuList>
        <MenuItem icon={<ArrowBackIcon />} onClick={logout}>
          ログアウト
        </MenuItem>
        <MenuItem icon={<EmailIcon />}>お問い合わせ</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LogoutButton;
