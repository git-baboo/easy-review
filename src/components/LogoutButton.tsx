import { ArrowBackIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuList, MenuItem, MenuButton, IconButton } from '@chakra-ui/react';
import React from 'react';

import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="ghost" colorScheme="ghost" />

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
