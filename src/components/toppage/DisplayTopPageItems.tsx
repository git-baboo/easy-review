import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import DummyTopPageData from '@/data/dummyTopPageData';

const DisplayTopPageItems = () => {
  const dataset = DummyTopPageData();
  return (
    <>
      <Box mt={6} mb={6} bg="green.100">
        <Text fontSize="md" fontWeight="bold">
          {dataset.title}
        </Text>
        <Text fontSize="xs">{dataset.directory}</Text>
      </Box>
      {/* <Box mt={6} mb={6} bg="green.100">
        <Text fontSize="md" fontWeight="bold">
          ToDoのstate管理方法の変更
        </Text>
        <Text fontSize="xs">git-baboo/minihackathon-a</Text>
      </Box>
      <Box mt={6} mb={6} bg="green.100">
        <Text fontSize="md" fontWeight="bold">
          ToDoのstate管理方法の変更
        </Text>
        <Text fontSize="xs">git-baboo/minihackathon-a</Text>
      </Box>
      <Box mt={6} mb={6} bg="green.100">
        <Text fontSize="md" fontWeight="bold">
          ToDoのstate管理方法の変更
        </Text>
        <Text fontSize="xs">git-baboo/minihackathon-a</Text>
      </Box> */}
    </>
  );
};

export default DisplayTopPageItems;
