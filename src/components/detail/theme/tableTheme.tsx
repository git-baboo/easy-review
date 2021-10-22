import { Table, Td, Th } from '@chakra-ui/table';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const tableTheme = ({ children }: Props) => {
  return <Table borderWidth={2}>{children}</Table>;
};

export const thTheme = ({ children }: Props) => {
  return <Th borderWidth={2}>{children}</Th>;
};

export const tdTheme = ({ children }: Props) => {
  return <Td borderWidth={2}>{children}</Td>;
};

export default tableTheme;
