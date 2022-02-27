import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Text,
  Icon,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

import { HSpacer } from "@/components/Spacer";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  text: string;
  icon: IconType;
  children: ReactNode;
};

const Layout = ({ text, icon, children }: Props) => {
  const { logout } = useAuth();

  return (
    <>
      <Flex bgColor="teal.500" h={36}>
        <HSpacer size={16} />
        <Flex alignSelf="center">
          <Icon as={icon} boxSize={6} color="teal.600" />
          <HSpacer size={1} />
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="white"
            whiteSpace="pre-line"
          >
            {text}
          </Text>
        </Flex>

        <Spacer />

        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon w={6} h={6} />}
            color="white"
            colorScheme="ghost"
            _focus={{ boxShadow: "none" }}
          />
          <MenuList>
            <MenuGroup>
              <MenuItem
                onClick={() => {
                  window.open(
                    "https://www.kiyac.app/termsOfService/uJBSYhgVE6HYcxs7gklF"
                  );
                }}
              >
                利用規約
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.open(
                    "https://www.kiyac.app/privacypolicy/pPYhCNHmkxjkZewFkatd"
                  );
                }}
              >
                プライバシーポリシー
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem
                onClick={() => {
                  window.open("https://forms.gle/W4s7xqEiAeskEof38");
                }}
              >
                フィードバック
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem onClick={logout}>ログアウト</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
      {children}
    </>
  );
};

export default Layout;
