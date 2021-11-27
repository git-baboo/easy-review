import { ArrowBackIcon, EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

import { useAuth } from "@/hooks/useAuth";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon w={6} h={6} />}
        color="white"
        variant="ghost"
        colorScheme="ghost"
        _focus={{ boxShadow: "none" }}
      />

      <MenuList>
        <MenuItem icon={<ArrowBackIcon />} onClick={logout}>
          ログアウト
        </MenuItem>
        <MenuItem
          icon={<EmailIcon />}
          onClick={() => {
            window.open("https://forms.gle/W4s7xqEiAeskEof38");
          }}
        >
          フィードバック
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LogoutButton;
