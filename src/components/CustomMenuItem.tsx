import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, MenuItem, MenuItemProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

import { HSpacer } from "@/components/Spacer";

type CustomProps = {
  isExternal?: boolean;
  children: ReactNode;
};

type Props = CustomProps & MenuItemProps;

const CustomMenuItem = ({
  isExternal = false,
  children,
  ...menuItemProps
}: Props) => {
  return (
    <MenuItem {...menuItemProps}>
      <Flex justify="space-between" align="center">
        <Text>{children}</Text>
        {isExternal && (
          <>
            <HSpacer size={2} />
            <ExternalLinkIcon color="gray.500" />
          </>
        )}
      </Flex>
    </MenuItem>
  );
};

export default CustomMenuItem;
