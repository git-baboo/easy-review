import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import DummyTopPageData from '@/data/dummyTopPageData';

const DisplayTopPageItems = () => {
  const dataset = DummyTopPageData();

  return (
    <>
      {dataset.map((data) => {
        return (
          <Box key={data.pullRequwstName} mt={6} mb={6}>
            <Text fontSize={20} fontWeight="bold">
              {data.pullRequwstName}
            </Text>
            <Text fontSize="xs">{data.repository}</Text>
          </Box>
        );
      })}
    </>
  );
};
export default DisplayTopPageItems;
