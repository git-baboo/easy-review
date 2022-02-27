import { MenuItem, MenuItemProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IconContext } from "react-icons";

type CustomProps = {
  icon: ReactElement;
};

type Props = CustomProps & MenuItemProps;

const MenuItemWithIcon = ({ icon, ...menuItemProps }: Props) => {
  return (
    <MenuItem
      icon={
        <IconContext.Provider value={{ size: "1.2rem" }}>
          {icon}
        </IconContext.Provider>
      }
      {...menuItemProps}
    />
  );
};

export default MenuItemWithIcon;
