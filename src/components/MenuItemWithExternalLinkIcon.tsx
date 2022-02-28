import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, MenuItem, MenuItemProps, Text } from "@chakra-ui/react";
import React from "react";

import { HSpacer } from "@/components/Spacer";

type CustomProps = {
  label: string;
};

type Props = CustomProps & MenuItemProps;

const MenuItemWithExternalLinkIcon = ({ label, ...menuItemProps }: Props) => {
  return (
    <MenuItem {...menuItemProps}>
      <Flex justify="space-between" align="center">
        <Text>{label}</Text>
        {/* プライバシーポリシーの部分でテキストとアイコンの距離が近すぎるのでスペース入れてます */}
        <HSpacer size={2} />
        <ExternalLinkIcon color="gray.500" />
      </Flex>
    </MenuItem>
  );
};

export default MenuItemWithExternalLinkIcon;
