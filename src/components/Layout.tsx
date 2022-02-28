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
  MenuGroup,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineLogout, MdOutlinePrivacyTip } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";

import MenuItemWithExternalIcon from "@/components/MenuItemWithExternalIcon";
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
              <MenuItemWithExternalIcon
                label="利用規約"
                // HACK: remで指定したくない
                // Chakra UIと同じ指定方法で統一できないか
                icon={<RiServiceLine size="1.2rem" />}
                onClick={() => {
                  window.open(
                    "https://www.kiyac.app/termsOfService/uJBSYhgVE6HYcxs7gklF"
                  );
                }}
              />
              <MenuItemWithExternalIcon
                label="プライバシーポリシー"
                icon={<MdOutlinePrivacyTip size="1.2rem" />}
                onClick={() => {
                  window.open(
                    "https://www.kiyac.app/privacypolicy/pPYhCNHmkxjkZewFkatd"
                  );
                }}
              />
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItemWithExternalIcon
                label="フィードバック"
                icon={<BiCommentDetail size="1.2rem" />}
                onClick={() => {
                  window.open("https://forms.gle/W4s7xqEiAeskEof38");
                }}
              />
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem
                icon={<MdOutlineLogout size="1.2rem" />}
                onClick={logout}
              >
                ログアウト
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
      {children}
    </>
  );
};

export default Layout;
