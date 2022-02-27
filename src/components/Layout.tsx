import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlinePrivacyTip, MdOutlineLogout } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";

import MenuItemWithIcon from "@/components/MenuItemWithIcon";
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
              <MenuItemWithIcon
                icon={<RiServiceLine />}
                onClick={() => {
                  window.open(
                    "https://www.kiyac.app/termsOfService/uJBSYhgVE6HYcxs7gklF"
                  );
                }}
              >
                利用規約 <ExternalLinkIcon />
              </MenuItemWithIcon>
              <MenuItemWithIcon
                icon={<MdOutlinePrivacyTip />}
                onClick={() => {
                  window.open(
                    "https://www.kiyac.app/privacypolicy/pPYhCNHmkxjkZewFkatd"
                  );
                }}
              >
                プライバシーポリシー <ExternalLinkIcon />
              </MenuItemWithIcon>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItemWithIcon
                icon={<BiCommentDetail />}
                onClick={() => {
                  window.open("https://forms.gle/W4s7xqEiAeskEof38");
                }}
              >
                フィードバック <ExternalLinkIcon />
              </MenuItemWithIcon>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItemWithIcon icon={<MdOutlineLogout />} onClick={logout}>
                ログアウト
              </MenuItemWithIcon>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
      {children}
    </>
  );
};

export default Layout;
