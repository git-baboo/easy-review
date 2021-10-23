import { AddIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuList, MenuItem, MenuButton, IconButton } from '@chakra-ui/react';
import React from 'react';

// import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  // const { logout } = useAuth();

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
      <MenuList>
        <MenuItem icon={<AddIcon />}>ログアウト</MenuItem>
        <MenuItem icon={<EmailIcon />}>お問い合わせ</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LogoutButton;
