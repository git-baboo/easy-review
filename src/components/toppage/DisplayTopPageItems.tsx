import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import DummyTopPageData from '@/data/dummyTopPageData';

const DisplayTopPageItems = () => {
  const topPageDataset = DummyTopPageData();

  return (
    <>
      {topPageDataset.map((canReviewData) => {
        return (
          <Box key={canReviewData.pullRequwstName} mt={6} mb={6}>
            <Text fontSize={20} fontWeight="bold">
              {canReviewData.pullRequwstName}
            </Text>
            <Text fontSize="xs">{canReviewData.repository}</Text>
          </Box>
        );
      })}
    </>
  );
};
export default DisplayTopPageItems;
