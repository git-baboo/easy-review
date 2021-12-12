import { Text } from "@chakra-ui/layout";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CheckboxTheme = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

export default CheckboxTheme;
