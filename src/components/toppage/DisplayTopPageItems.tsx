import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import DummyTopPageData from '@/data/dummyTopPageData';

const DisplayTopPageItems = () => {
  const dataset = DummyTopPageData();

  return (
    <>
      {dataset.map((data) => {
        return (
          <Box key={data.title} mt={6} mb={6}>
            <Text fontSize="md" fontWeight="bold">
              {data.title}
            </Text>
            <Text fontSize="xs">{data.directory}</Text>
          </Box>
        );
      })}
    </>
  );
};
export default DisplayTopPageItems;
