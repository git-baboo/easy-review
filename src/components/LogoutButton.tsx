import { ArrowBackIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuList, MenuItem, MenuButton, IconButton } from '@chakra-ui/react';
import React from 'react';

import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          {isOpen ? (
            <MenuButton
              isActive={isOpen}
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="ghost"
              colorScheme="ghost"
            />
          ) : (
            <MenuButton
              isActive={isOpen}
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="ghost"
              _hover={{ bg: 'teal.500' }}
              _selected={{ bg: 'teal.500' }}
            />
          )}
          <MenuList>
            <MenuItem icon={<ArrowBackIcon />} onClick={logout}>
              ログアウト
            </MenuItem>
            <MenuItem icon={<EmailIcon />}>お問い合わせ</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default LogoutButton;
